const Contact = require('../models/contactModel');
const createError = require('../utils/appError');

// Create a new contact
exports.createContact = async (req, res, next) => {
  try {
    const newContact = await Contact.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        contact: newContact,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get all contacts
exports.getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({
      status: 'success',
      results: contacts.length,
      data: {
        contacts,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get a single contact by ID
exports.getContactById = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return next(new createError('Contacto no encontrado', 404));
    }
    res.status(200).json({
      status: 'success',
      data: {
        contact,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Update a contact by ID
exports.updateContactById = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!contact) {
      return next(new createError('Contacto no encontrado', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        contact,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Delete a contact by ID
exports.deleteContactById = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return next(new createError('Contacto no encontrado', 404));
    }
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};