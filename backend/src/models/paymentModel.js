const { Schema, mongoose } = require('mongoose');

const paymentSchema = new mongoose.Schema({
  responsible: {
    type: String,
    required: false,
  },
  ammount: {
    type: Double,
    required: true,
  },
  payment_date: {
    type: Timestamp,
    required: true,
  },
  transaction_type: {
    type: String,
    required: true,
    enum: [ 'Enganche', 'Abono', 'Apartado', 'Anticipo' ],
  },
  payment_method: {
    type: String,
    required: true,
    enum: [ 'Deposito', 'Efectivo', 'Cheque' ],
  },
  payment_type: {
    type: String,
    required: true,
    enum: [ 'Ingreso', 'Egreso' ],
  },
  remaining_payments: {
    type: Integer,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  another: {
    type: String,
    required: false,
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
    required: false,
  },
  lot: {
    type: Schema.Types.ObjectId,
    ref: 'Lot',
    required: false,
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
