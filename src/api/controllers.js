// src/api/controllers.js

const { createJob } = require('../models/eventModel');
const { enqueueJob } = require('../queue/producer');

// TEMP: in-memory store (replaced by PostgreSQL in Phase 2C)
const jobStore = new Map();

async function createJobController(req, res) {
  try {
    const { type, payload } = req.body;

    if (!type) {
      return res.status(400).json({ error: 'Job type is required' });
    }

    const job = createJob({ type, payload });

    // persist job (temporary)
    jobStore.set(job.id, job);

    // enqueue job ID
    await enqueueJob(job.id);

    return res.status(202).json({
      jobId: job.id,
      status: job.status,
    });
  } catch (err) {
    console.error('Enqueue error:', err);
    return res.status(500).json({
      error: 'Failed to enqueue job',
      details: err.message
    });
  }
}

module.exports = {
  createJobController,
  jobStore, // exposed for later phases
};