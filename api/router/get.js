import products from '../lib/products'
import Router from './index'
import getRequestContext from '../helpers/get-request-contex'
const responseBuilder = require('aws-lambda-response-builder')

const dispatcher = async (event, context) => {
    const router = Router()
    const requestContext = await getRequestContext(event)
    const { pathParameters, body } = requestContext

    router.http.get('/products/list', () =>
        products.read().then((result) => responseBuilder.buildApiGatewayOkResponse(result))
    )

    return router.dispatch(event, context)
}

export const handler = async (event, context) => {
    try {
        return await dispatcher(event, context)
    } catch (err) {
        console.error(err)
        return responseBuilder.buildApiGatewayBadRequest(err)
    }
}
