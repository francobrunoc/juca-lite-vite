import querystring from 'querystring'

/**
 * @param {Object} obj
 * @returns {boolean}
 */
export const isObject = (obj) => typeof obj === 'object' && obj !== null

/**
 * @param {Object|Array} objectOrArray
 * @returns {Object|Array}
 */
export const unescapeStrings = (objectOrArray) =>
  Object.keys(objectOrArray || {}).reduce(
    (result, key) => {
      const value = objectOrArray[key]
      if (typeof value === 'string') {
        result[key] = querystring.unescape(value)
      }
      if (isObject(value) || Array.isArray(value)) {
        result[key] = unescapeStrings(value)
      }
      return result
    },
    isObject(objectOrArray)
      ? { ...objectOrArray }
      : Array.isArray(objectOrArray)
      ? [...objectOrArray]
      : objectOrArray
  )
