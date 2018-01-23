const bcrypt = require('bcrypt');
const {
  User, Business, Contractee, PaymentContract,
} = require('../models/index');

const getAuthenticatedUser = context => context.user.then((user) => {
  if (!user) {
    return Promise.reject(Error('Unauthorized'));
  }
  return user;
});

const businessLogic = {
  addBusiness: (root, { name, logo, user }, context) => getAuthenticatedUser(context)
    .then((currUser) => {
      if (currUser._id.toString() !== user) {
        return Promise.reject(Error('Not the authed in user!'));
      }
      return Business.create({
        name,
        logo,
        user,
      }).then((business) => {
        User.findById(user, (err, foundUser) => {
          if (err) throw err;
          foundUser.business = business._id;
          foundUser.save((error, updatedUser) => {
            if (error) throw error;
          });
        });
        return business;
      });
    }),
};

const userLogic = {
  addUser: (root, {
    id, firstName, lastName, email, username, password, business,
  }, context) => getAuthenticatedUser(context)
    .then(currUser => User.findOne({ username })
      .then((existing) => {
        if (!existing && currUser.role === 'owner') {
          return bcrypt.hash(password, 10).then(hash => User.create({
            firstName,
            lastName,
            email,
            password: hash,
            username,
            role: 'user',
            business,
          }));
        }
        return Promise.reject(Error('Username already exists!'));
      })),
};

const contracteeLogic = {
  addContractee: (root, {
    first_name, last_name, email, address, business,
  }, context) => getAuthenticatedUser(context)
    .then((currUser) => {
      if (currUser.business.toString() === business) {
        return Contractee.create({
          first_name,
          last_name,
          email,
          address,
          business,
        });
      }
      return Promise.reject((Error('Logged in user cannot add contractee for this business.')));
    }),
};

const paymentContractLogic = {
  addPaymentContract: (root, {
    contractee, total, fees, down_payment, insurance, range, terms,
  }, context) => getAuthenticatedUser(context)
    .then(currUser => Contractee.findOne({ _id: contractee })
      .then((foundContractee) => {
        if (foundContractee._id.toString() === contractee) {
          return PaymentContract.create({
            contractee,
            total,
            fees,
            down_payment,
            insurance,
            range,
            terms,
            monthly_payment: ((total + fees) - down_payment - insurance) / range,
          });
        }
        return Promise.reject(Error('Payment contract cannot be added for this contractee!'));
      })),
};

module.exports = {
  businessLogic,
  userLogic,
  contracteeLogic,
  paymentContractLogic,
};
