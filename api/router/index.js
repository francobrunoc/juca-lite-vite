import EverestateRouter from '@everestate/serverless-router'
import { HTTP } from '@everestate/serverless-router-aws'
// import middlewares from './_middlewares'
import getRequestContext from '../helpers/get-request-context'
import responseBuilder from '../helpers/response-builder'
const STAGE = process.env.STAGE

export default class Router {
  /**
   * @param {Object} event
   * @param {Object} context
   * @param {Object} [options] Global options object. These options can be overwritten in the method.
   * @param {Object} [options.hooks]
   */
  constructor(event, context, options) {
    let { path } = event
    if (path.startsWith(`/${STAGE}`)) path = path.replace(`/${STAGE}`, '')
    this.request = getRequestContext({ ...event, path })
    this.context = { ...context }
    this.options = { ...options }
    this.router = new EverestateRouter([HTTP])
    // Default middlewares
    // this.use(...middlewares)
    // Default router mismatch
    this.mismatch(() => {
      const { path, httpMethod } = this.request
      return Promise.reject(
        new Error(`Unknown route: ${httpMethod} ${path}`)
      )
    })
  }

  /**
   * @param {String} method
   * @param {String} path
   * @param {Function} controller
   * @param {Object} [options]
   * @param {Object} [options.hooks]
   * @private
   */
  _wrapHttpMethod(method, path, controller, options) {
    options = options || this.options || {}
    options.hooks = options.hooks || {}
    this.router.http[method](path, async () => {
      let request = { ...this.request }
      let context = { ...this.context }
      if (options.hooks.before instanceof Function) {
        ;({ request, context } = await options.hooks.before(request, context))
      }
      let response = await controller(request, context)
      if (options.hooks.after instanceof Function) {
        response = await options.hooks.after(request, context, response)
      }
      return response
    })
  }

  /**
   * @param {Function} middlewares
   */
  use(...middlewares) {
    middlewares.forEach((middleware) => this.router.use(middleware))
    return this
  }

  /**
   * @param {String} path
   * @param {Function} controller
   */
  get(path, controller) {
    this._wrapHttpMethod('get', path, controller)
    return this
  }

  /**
   * @param {String} path
   * @param {Function} controller
   */
  post(path, controller) {
    this._wrapHttpMethod('post', path, controller)
    return this
  }

  /**
   * @param {String} path
   * @param {Function} controller
   */
  put(path, controller) {
    this._wrapHttpMethod('put', path, controller)
    return this
  }

  /**
   * @param {String} path
   * @param {Function} controller
   */
  patch(path, controller) {
    this._wrapHttpMethod('path', path, controller)
    return this
  }

  /**
   * @param {String} path
   * @param {Function} controller
   */
  delete(path, controller) {
    this._wrapHttpMethod('delete', path, controller)
    return this
  }

  /**
   * @param {Function} handler
   */
  mismatch(handler) {
    this.router.mismatch(handler)
    return this
  }

  /**
   * @returns {Promise<*|(*&{headers: *&{"Access-Control-Allow-Origin": string, "Access-Control-Allow-Credentials": boolean, "Access-Control-Allow-Headers": string, "Content-Type": string}, body: any, statusCode: number})>}
   */
  async dispatch() {
    try {
      return await this.router.dispatch(this.request, this.context)
    } catch (err) {
      console.error(err)
      return responseBuilder.genericError(err)
    }
  }
}

export { getRequestContext, responseBuilder }
