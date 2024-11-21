const express = require('express');
const paymentController = require('../controllers/paymentController');

const router = express.Router();

router
  .route('/')
  .post(paymentController.createPayment)
  .get(paymentController.getAllPayments);

router
  .route('/:id')
  .get(paymentController.getPaymentById)
  .patch(paymentController.updatePaymentById)
  .delete(paymentController.deletePaymentById);

module.exports = router;