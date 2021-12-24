import AWS from 'aws-sdk'

const table = `juca-lite-${process.env.STAGE}-demo`

export const read = async () => {
    const doc = new AWS.DynamoDB.DocumentClient()
    const params = {
        TableName: table,
    }
    return await doc
        .scan(params)
        .promise()
        .then((data) => {
            return data.Items
        })
        .catch((err) => err)
}

export const write = async (product) => {
    const doc = new AWS.DynamoDB.DocumentClient()
    const params = {
        TableName: table,
        Item: {
            nome: product.name,
            familia: product.family,
            preço: product.price
        },
    }
    await doc
        .put(params)
        .promise()
        .then((data) => data)
        .catch((err) => err)
}

export const find = async (query) => {
    const doc = new AWS.DocumentClient()
    const params = {
        TableName: table,
        Key: {
            name: query,
        },
    }
    await doc.get(params)
    .promise()
    .then((data) => {
      return data.Item
    })
    .catch((err) => err)
}

export default { read, write, find }
