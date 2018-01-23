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
  addBusiness: (root, { name, logo, user }, context) => getAuthenticatedUser(context).then(() => Business.create({
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
  })),
};


module.exports = {
  businessLogic,
};
