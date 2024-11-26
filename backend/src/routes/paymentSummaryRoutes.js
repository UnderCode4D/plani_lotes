const express = require('express');
const paymentSummaryController = require('../controllers/paymentSummaryController');

const router = express.Router();

router.get('/summary', paymentSummaryController.getPaymentsSummaryByType);
router.get('/ingresos', paymentSummaryController.getIngresosByDay);
router.get('/egresos', paymentSummaryController.getEgresosByDay);

module.exports = router;