// src/queue/consumer.js

const { redisClient } = require('./redisClient');
const { JOB_QUEUE_KEY } = require('./producer');

async function getNextJobId() {
  const result = await redisClient.blPop(JOB_QUEUE_KEY, 0);
  return result?.element;
}

module.exports = {
  getNextJobId,
};