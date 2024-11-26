const Contact = require('../models/contactModel');
const createError = require('../utils/appError');
const sendEmail = require('../utils/nodeMailer');

// Create a new contact
exports.createContact = async (req, res, next) => {
  try {
    const newContact = await Contact.create(req.body);

    const currentDate = new Date().toLocaleString();

    await sendEmail({
      email: newContact.email,
      subject: 'Confirmación de Contacto',
      html: `
         <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <p>Hola ${newContact.full_name},</p>
            <p>Gracias por contactarnos en UnderCode. Hemos recibido tu mensaje el ${currentDate} y nuestro equipo se pondrá en contacto contigo lo antes posible.</p>
            <p>Aquí está una copia de tu mensaje:</p>
            <blockquote>${newContact.message}</blockquote>
            <p>Si tienes alguna pregunta adicional o necesitas más información, no dudes en responder a este correo.</p>
            <p>Puedes contactarnos directamente en: <a href="mailto:undercode4d@gmail.com">undercode4d@gmail.com</a></p>
            <p>Saludos cordiales,<br>El equipo de UnderCode</p>
            <img src="cid:logo" alt="UnderCode Logo" style="width: 100px; height: auto; margin-top: 20px;">
         </div>
        `,
    });

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