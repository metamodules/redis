// @flow

const Redis = require('redis')
const { REDIS_URIS } = require('./config')
const redisOptions = {}
const redisHandles = {}

module.exports = function redis (
  target /*: string */ = REDIS_URIS,
  forceNew /*: boolean */ = false
) {
  if (redisHandles[target] && !forceNew) return redisHandles[target]

  // TODO: Support master/slave and Redis Cluster
  const targets = target.split(',').map(t => {
    if (t.indexOf('redis://') !== 0) t = 'redis://' + t
    return new URL(t)
  })
  const handle = Redis.createClient(
    targets[0].port,
    targets[0].host,
    redisOptions
  )
  if (forceNew) return handle
  redisHandles[target] = handle
  return redisHandles[target]
}
