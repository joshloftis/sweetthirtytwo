const mongoose = require('mongoose');

const { Schema } = mongoose;
const OwnerSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: 'First Name is Required',
  },
  lastName: {
    type: String,
    trim: true,
    required: 'Last Name is Required',
  },
  username: {
    type: String,
    trim: true,
    required: 'Username is Required',
  },
  password: {
    type: String,
    trim: true,
    required: 'Password is Required',
    validate: [
      input => input.length >= 6, 'Password should be longer.',
    ],
  },
  email: {
    type: String,
    unique: true,
    match: [/.+\@.+\..+/, 'Please enter a valid e-mail address'],
  },
  userCreated: {
    type: Date,
    default: Date.now,
  },
  fullName: String,
});

OwnerSchema.methods.setFullName = function setFullNameOfOwner() {
  this.fullName = `${this.firstName} ${this.lastName}`;
  return this.fullName;
};

const Owner = mongoose.model('Owner', OwnerSchema);
module.exports = Owner;
