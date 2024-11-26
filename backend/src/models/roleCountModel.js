const mongoose = require('mongoose');

const roleCountSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
    enum: ['Empleado', 'Administrador', 'Dueño', 'Cliente'],
  },
  count: {
    type: Number,
    required: true,
    default: 0,
  },
}, { timestamps: true });

roleCountSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

// RoleCount Model
const RoleCount = mongoose.model('RoleCount', roleCountSchema);
module.exports = RoleCount;