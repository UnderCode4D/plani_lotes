const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  max: 100,
  windowMs: 15 * 60 * 1000,
  message: 'Too many requests from this IP, please try again after 15 minutes',
});

module.exports = limiter;
