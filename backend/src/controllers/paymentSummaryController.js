const Payment = require('../models/paymentModel');
const createError = require('../utils/appError');
const mongoose = require('mongoose');

// Get all payments for the current day and sum them by type (Ingreso/Egreso)
exports.getPaymentsSummaryByType = async (req, res, next) => {
  try {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const payments = await Payment.aggregate([
      {
        $match: {
          payment_date: {
            $gte: startOfDay,
            $lte: endOfDay,
          },
        },
      },
      {
        $group: {
          _id: '$payment_type',
          totalAmount: { $sum: '$ammount' },
          payments: { $push: '$$ROOT' },
        },
      },
    ]);

    res.status(200).json({
      status: 'success',
      data: payments,
    });
  } catch (error) {
    next(error);
  }
};

// Get all ingresos for the current day and sum them
exports.getIngresosByDay = async (req, res, next) => {
  try {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const ingresos = await Payment.find({
      payment_date: {
        $gte: startOfDay,
        $lte: endOfDay,
      },
      payment_type: 'Ingreso',
    });

    const totalIngresos = ingresos.reduce((sum, ingreso) => sum + ingreso.ammount, 0);

    res.status(200).json({
      status: 'success',
      total: totalIngresos,
      data: ingresos,
    });
  } catch (error) {
    next(error);
  }
};

// Get all egresos for the current day and sum them
exports.getEgresosByDay = async (req, res, next) => {
  try {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const egresos = await Payment.find({
      payment_date: {
        $gte: startOfDay,
        $lte: endOfDay,
      },
      payment_type: 'Egreso',
    });

    const totalEgresos = egresos.reduce((sum, egreso) => sum + egreso.ammount, 0);

    res.status(200).json({
      status: 'success',
      total: totalEgresos,
      data: egresos,
    });
  } catch (error) {
    next(error);
  }
};