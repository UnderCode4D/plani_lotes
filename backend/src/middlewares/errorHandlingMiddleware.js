module.exports = (logger) => {
  // Unhandled promise rejections
  process.on('unhandledRejection', (err) => {
    logger.error('Unhandled Rejection:', err);
    process.exit(1);
  });

  // Uncaught exceptions
  process.on('uncaughtException', (err) => {
    logger.error('Uncaught Exception:', err);
    process.exit(1);
  });
};
