const { Schema, mongoose } = require('mongoose');

const customerSchema = new mongoose.Schema({
  firstname_owner: {
    type: String,
    required: true,
  },
  lastname_owner: {
    type: String,
    required: true,
  },
  dpi: {
    type: String,
    unique: true,
    required: true,
  },
  phone_number: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  state: {
    type: Boolean,
    required: true,
  },
  notification: {
    type: Boolean,
    required: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
}, { timestamps: true });

customerSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

// Customer model
const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
