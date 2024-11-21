const express = require('express');
const lotController = require('../controllers/lotController');

const router = express.Router();

router
  .route('/')
  .post(lotController.createLot)
  .get(lotController.getAllLots);

router
  .route('/:id')
  .get(lotController.getLotById)
  .patch(lotController.updateLotById)
  .delete(lotController.deleteLotById);

module.exports = router;