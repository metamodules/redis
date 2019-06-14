// @flow

const Redis = require('redis')
const { REDIS_SERVICE_HOST, REDIS_SERVICE_PORT } = require('./config')
const redisHandles = {}

module.exports = function redis (
  target /*: string */ = `${REDIS_SERVICE_HOST}:${REDIS_SERVICE_PORT}`,
  forceNew /*: boolean */ = false,
  options /*: Object */
) {
  if (redisHandles[target] && !forceNew) return redisHandles[target]

  // TODO: Support master/slave and Redis Cluster
  if (target.indexOf('redis://') !== 0) target = 'redis://' + target
  const handle = Redis.createClient(target, Object.assign({}, options))

  redisHandles[target] = handle
  return redisHandles[target]
}
