// src/server.js

const app = require('./app');
const { connectRedis } = require('./queue/redisClient');
const { startWorker } = require('./workers/jobWorker');

const PORT = process.env.PORT || 3000;

(async () => {
  await connectRedis();

  //startWorker(); // start background worker

  app.listen(PORT, () => {
    console.log(`PulseQueue API running on port ${PORT}`);
  });
})();