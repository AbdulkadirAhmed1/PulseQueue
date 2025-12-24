// src/app.js

const express = require('express');

const app = express();

app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'PulseQueue',
    timestamp: new Date().toISOString()
  });
});

module.exports = app;