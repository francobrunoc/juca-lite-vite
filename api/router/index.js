import Router from '@everestate/serverless-router'
import { HTTP } from '@everestate/serverless-router-aws'

export default () => {
  const router = new Router([HTTP])

  return router
}
