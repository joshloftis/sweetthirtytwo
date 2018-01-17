const mongoose = require('mongoose');

const { Schema } = mongoose;
const PaymentSchema = new Schema({
  contractee: {
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
  },
  terms: {
    type: String,
    required: true,
  },
});

PaymentSchema.methods.getMonthlyPayment = function monthly() {
  this.monthly_payment = ((this.total + this.fees) - this.down_payment - this.insurance) / this.range;
  return this.monthly_payment;
};

const PaymentContract = mongoose.model('PaymentContract', PaymentSchema);

module.exports = PaymentContract;
