const express = require('express');
const morgan = require('morgan');

require('dotenv').config();
require('./config/mongoDBConnection.js');

const app = express();

// Setup the logger
app.use(morgan('tiny'));

// Logger Middleware
const logger = require('./middlewares/loggerMiddleware');
logger.info('Logger initialized');

// Security Middlewares
app.use(require('./middlewares/helmetMiddleware'));
app.use(require('./middlewares/corsMiddleware'));
app.use(require('./middlewares/rateLimiterMiddleware'));
app.use(require('./middlewares/hppMiddleware'));

// General Middlewares
app.use(express.json());

// Routes
const authRoute = require('./routes/authRoutes');
const userRoute = require('./routes/userRoutes');
const lotRoute = require('./routes/lotRoutes');
const customerRoute = require('./routes/customerRoutes'); 

// Health Check
app.get('/ping', async (_, res) => {
  res.send('pong');
});

// Routes usage
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/lot', lotRoute);
app.use('/api/customer', customerRoute);

// Global error handler middleware
app.use(require('./middlewares/errorHandlerMiddleware'));

// Error handling for unhandled rejections and uncaught exceptions
require('./middlewares/errorHandlingMiddleware')(logger);

// Server initialization
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
      // Start server
      app.listen(PORT, () => {
          logger.info(`Server running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode!`);
      });
  } catch (err) {
      logger.error('Failed to start server:', err);
      process.exit(1);
  }
};

process.on('SIGTERM', () => {
  console.debug('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.debug('HTTP server closed');
  });
});

startServer();