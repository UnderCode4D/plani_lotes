const express = require('express');
const customerController = require('../controllers/customerController');

const router = express.Router();

router
  .route('/')
  .post(customerController.createCustomer)
  .get(customerController.getAllCustomers);

router
  .route('/:id')
  .get(customerController.getCustomerById)
  .patch(customerController.updateCustomerById)
  .delete(customerController.deleteCustomerById);

module.exports = router;