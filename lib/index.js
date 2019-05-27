// @flow

const Redis = require('redis')
const { REDIS_HOST, REDIS_PORT } = require('./config')
const redisOptions = {}
const redisHandles = {}

module.exports = function redis (
  target /*: string */ = `${REDIS_HOST}:${REDIS_PORT}`,
  forceNew /*: boolean */ = false
) {
  if (redisHandles[target] && !forceNew) return redisHandles[target]

  // TODO: Support master/slave and Redis Cluster
  if (target.indexOf('redis://') !== 0) target = 'redis://' + target

  const handle = Redis.createClient(target, redisOptions)
  if (forceNew) return handle
  redisHandles[target] = handle
  return redisHandles[target]
}
