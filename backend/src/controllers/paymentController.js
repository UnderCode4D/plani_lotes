const Payment = require('../models/paymentModel');
const createError = require('../utils/appError');

// Create a new payment
exports.createPayment = async (req, res, next) => {
  try {
    const newPayment = await Payment.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        payment: newPayment,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get all payments
exports.getAllPayments = async (req, res, next) => {
  try {
    const payments = await Payment.find();
    res.status(200).json({
      status: 'success',
      results: payments.length,
      data: {
        payments,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get a single payment by ID
exports.getPaymentById = async (req, res, next) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) {
      return next(new createError('Pago no encontrado', 404));
    }
    res.status(200).json({
      status: 'success',
      data: {
        payment,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Update a payment by ID
exports.updatePaymentById = async (req, res, next) => {
  try {
    const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!payment) {
      return next(new createError('Pago no encontrado', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        payment,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Delete a payment by ID
exports.deletePaymentById = async (req, res, next) => {
  try {
    const payment = await Payment.findByIdAndDelete(req.params.id);
    if (!payment) {
      return next(new createError('Pago no encontrado', 404));
    }
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};