// src/app.js

const express = require('express');

const app = express();
const routes = require('./api/routes');

app.use(express.json());
app.use('/api', routes); 

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'PulseQueue',
    timestamp: new Date().toISOString()
  });
});

module.exports = app;