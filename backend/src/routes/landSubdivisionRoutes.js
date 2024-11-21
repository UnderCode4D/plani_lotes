const express = require('express');
const landSubdivisionController = require('../controllers/landSubdivisionController');

const router = express.Router();

router
  .route('/')
  .post(landSubdivisionController.createLandSubdivision)
  .get(landSubdivisionController.getAllLandSubdivisions);

router
  .route('/:id')
  .get(landSubdivisionController.getLandSubdivisionById)
  .patch(landSubdivisionController.updateLandSubdivisionById)
  .delete(landSubdivisionController.deleteLandSubdivisionById);

module.exports = router;