// src/api/routes.js

const express = require('express');
const { createJobController } = require('./controllers');

const router = express.Router();

router.post('/jobs', createJobController);

module.exports = router;