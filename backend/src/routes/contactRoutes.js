const express = require('express');
const contactController = require('../controllers/contactController');

const router = express.Router();

// Contact routes
router
  .route('/')
  .post(contactController.createContact)
  .get(contactController.getAllContacts);

router
  .route('/:id')
  .get(contactController.getContactById)
  .patch(contactController.updateContactById)
  .delete(contactController.deleteContactById);

module.exports = router;
