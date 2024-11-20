const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

module.exports = (app) => {
  app.use(mongoSanitize());
  app.use(xss());
};
