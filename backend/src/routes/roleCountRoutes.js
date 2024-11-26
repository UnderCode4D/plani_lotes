const express = require('express');
const roleCountController = require('../controllers/roleCountController');

const router = express.Router();

router
  .route('/')
  .post(roleCountController.createRoleCount)
  .get(roleCountController.getAllRoleCounts);

router
  .route('/:id')
  .get(roleCountController.getRoleCountById)
  .patch(roleCountController.updateRoleCountById)
  .delete(roleCountController.deleteRoleCountById);

module.exports = router;