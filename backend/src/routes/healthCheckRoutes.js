const express = require('express');
const healthCheckController = require('../controllers/healthCheckController');

const router = express.Router();

router.get('/ping', healthCheckController.ping);

module.exports = router;