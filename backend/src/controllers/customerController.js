const Customer = require('../models/customerModel');
const createError = require('../utils/appError');

// Create a new customer
exports.createCustomer = async (req, res, next) => {
  try {
    const newCustomer = await Customer.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        customer: newCustomer,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get all customers
exports.getAllCustomers = async (req, res, next) => {
  try {
    const customers = await Customer.find();
    res.status(200).json({
      status: 'success',
      results: customers.length,
      data: {
        customers,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get a single customer by ID
exports.getCustomerById = async (req, res, next) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return next(new createError('Cliente no encontrado', 404));
    }
    res.status(200).json({
      status: 'success',
      data: {
        customer,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Update a customer by ID
exports.updateCustomerById = async (req, res, next) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!customer) {
      return next(new createError('Cliente no encontrado', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        customer,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Delete a customer by ID
exports.deleteCustomerById = async (req, res, next) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) {
      return next(new createError('Cliente no encontrado', 404));
    }
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};