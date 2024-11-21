const { Schema, mongoose } = require('mongoose');

const lotSchema = new mongoose.Schema({
  lot_number: {
    type: Integer,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  total_price: {
    type: Double,
    required: true,
  },
  purchase_method: {
    type: String,
    required: true,
  },
  state: {
    type: Boolean,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  landSubdivision: {
    type: Schema.Types.ObjectId,
    ref: 'LandSubdivision',
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
  },
}, { timestamps: true });

lotSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

// Lot model
const Lot = mongoose.model('Lot', lotSchema);
module.exports = Lot;
