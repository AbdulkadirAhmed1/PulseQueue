// src/queue/redisClient.js

const { createClient } = require('redis');

const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';

const redisClient = createClient({ url: REDIS_URL });

let redisAvailable = false;

redisClient.on('connect', () => {
  redisAvailable = true;
  console.log('Redis connected');
});

redisClient.on('error', (err) => {
  redisAvailable = false;
  console.warn('Redis unavailable:', err.message);
});

async function connectRedis() {
  if (!redisClient.isOpen) {
    await redisClient.connect();
  }
}

function isRedisAvailable() {
  return redisAvailable;
}

module.exports = {
  redisClient,
  connectRedis,
  isRedisAvailable,
};