// src/models/eventModel.js

const JOB_STATUS = {
  QUEUED: 'queued',
  PROCESSING: 'processing',
  COMPLETED: 'completed',
  FAILED: 'failed',
};

function createJob({ type, payload }) {
  return {
    id: crypto.randomUUID(),
    type,
    status: JOB_STATUS.QUEUED,
    payload,
    result: null,
    error: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

module.exports = {
  JOB_STATUS,
  createJob,
};