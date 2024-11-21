const { Schema, mongoose } = require('mongoose');

const paymentSchema = new mongoose.Schema({
  ammount: {
    type: Double,
    required: true,
  },
  payment_date: {
    type: Timestamp,
    required: true,
  },
  payment_method: {
    type: String,
    required: true,
  },
  remaining_payments: {
    type: Integer,
    required: false,
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
  },
  lot: {
    type: Schema.Types.ObjectId,
    ref: 'Lot',
  },
}, { timestamps: true });

paymentSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

// Payment model
const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;
