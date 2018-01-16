const mongoose = require('mongoose');

const { Schema } = mongoose;
const UserSchema = new Schema({
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
  business: {
    type: Schema.Types.ObjectId,
    ref: 'Business',
    required: true,
  },
  fullName: String,
});

UserSchema.methods.setFullName = function setFullNameOfUser() {
  this.fullName = `${this.firstName} ${this.lastName}`;
  return this.fullName;
};

const User = mongoose.model('User', UserSchema);
module.exports = User;
