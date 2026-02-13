// src/queue/producer.js

const { redisClient } = require('./redisClient');

const JOB_QUEUE_KEY = 'pulsequeue:jobs';

async function enqueueJob(jobId) {
  await redisClient.rPush(JOB_QUEUE_KEY, jobId);
}

module.exports = {
  enqueueJob,
  JOB_QUEUE_KEY,
};