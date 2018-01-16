const mongoose = require('mongoose');

const { Schema } = mongoose;
const BusinessSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'Owner',
  },
});

const Business = mongoose.model('Business', BusinessSchema);
module.exports = Business;
