const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: false,
  },
}, { timestamps: true });

contactSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

// Contact model
const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;