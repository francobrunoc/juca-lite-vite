import dynamo from '../resources/dynamo/products'

const read = async () => {
  return await dynamo.read()
}

const write = async () => {
  return await dynamo.write()
}

const find = async (query) => {
  return await dynamo.find(query)
}

export default { read, write, find }
