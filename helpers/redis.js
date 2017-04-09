const redis = require('redis');
const bluebird = require('bluebird');

// make redis use promises
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

// create the client
const REDIS_PORT = process.env.REDIS_PORT || 6379;
const REDIS_HOST = process.env.REDIS_HOST || 'localhost';
const client = redis.createClient({
  port: REDIS_PORT,
  host: REDIS_HOST
});

module.exports = client;
