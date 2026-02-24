// src/workers/jobWorker.js

const { connectRedis } = require('../queue/redisClient');
const { getNextJobId } = require('../queue/consumer');
const { jobStore } = require('../api/controllers');

async function startWorker() {
  await connectRedis(); 

  console.log('Worker started. Waiting for jobs...');

  while (true) {
    try {
      const jobId = await getNextJobId();
      if (!jobId) continue;

      const job = jobStore.get(jobId);
      if (!job) continue;

      console.log(`Processing job ${jobId}`);

      job.status = 'processing';

      await new Promise(resolve => setTimeout(resolve, 3000));

      job.status = 'completed';

      console.log(`Completed job ${jobId}`);

    } catch (err) {
      console.error('Worker error:', err.message);
    }
  }
}

if (require.main === module) {
  startWorker();
}