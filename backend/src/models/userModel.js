const mongoose = require('mongoose');
const uniqueValidation = require('mongoose-unique-validation');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['Empleado', 'Administrador', 'Dueño'],
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  state: {
    type: Boolean,
    required: true,
  },
}, { timestamps: true });

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash; // Deleting the pass
  },
});

userSchema.plugin(uniqueValidation);

// User Model
const User = mongoose.model('User', userSchema);
module.exports = User;
