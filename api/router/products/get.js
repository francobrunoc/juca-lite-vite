import products from '../../lib/products'
import { default as Router, responseBuilder } from '../index'

export const handler = async (event, context) => {
    return await new Router(event, context)

        .get('/products/list', (request) => {
            return products.read().then((products) =>
                responseBuilder.success.ok({ body: products }),
            )
        }).dispatch()
}

