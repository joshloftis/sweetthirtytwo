const mongoose = require('mongoose');

const { Schema } = mongoose;
const PaymentSchema = new Schema({
  contract_id: {
    type: Schema.Types.ObjectId,
    ref: 'Contractee',
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  fees: {
    type: Number,
    required: true,
  },
  down_payment: {
    type: Number,
    required: true,
  },
  insurance: {
    type: Number,
    required: true,
  },
  range: {
    type: Number,
    required: true,
  },
  monthly_payment: {
    type: Number,
    required: true,
  },
  terms: {
    type: String,
    required: true,
  },
});

const PaymentContract = mongoose.model('PaymentContract', PaymentSchema);

module.exports = PaymentContract;
