const express = require('express');
const { createJobController, jobStore } = require('./controllers');

const router = express.Router();

router.post('/jobs', createJobController);

router.get('/jobs/:id', (req, res) => {
  const job = jobStore.get(req.params.id);

  if (!job) {
    return res.status(404).json({
      error: 'Job not found'
    });
  }

  return res.json(job);
});

module.exports = router;