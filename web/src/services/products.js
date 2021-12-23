import request from './api/_request'

const service = {
    async listProducts() {
        return await request.get('products/list')
    }
}

export default service
