const mongoose = require('mongoose');

const { Schema } = mongoose;
const ContracteeSchema = new Schema({
  contract_id: {
    type: Number,
    required: true,
    default: Date.now,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, 'Please enter a valid e-mail address'],
  },
  address: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  status: {
    type: Boolean,
    required: true,
    default: false,
  },
  business: {
    type: Schema.Types.ObjectId,
    ref: 'Business',
  },
});

const Contractee = mongoose.model('Contractee', ContracteeSchema);

module.exports = Contractee;
