# Redis Meta-Module ![CircleCI](https://img.shields.io/circleci/build/github/nodeapp-metamodules/redis.svg) [![npm version](https://img.shields.io/npm/v/redis.svg)](https://www.npmjs.com/package/@nodeapp/redis)

For use with [create-node-app](https://github.com/kubesail/create-node-app) and [deploy-node-app](https://github.com/kubesail/deploy-node-app)

To add this metamodule to your project:

```
npm install @nodeapp/redis
```

```js
const redis = require('@nodeapp/redis')()

// This "just works" both in development and production!
redis.get('my-key', function(err, reply) {
  console.log(reply)
})
```

This is simple wrapper around the [node_redis](https://github.com/NodeRedis/node_redis) module which includes the Redis 5 image
