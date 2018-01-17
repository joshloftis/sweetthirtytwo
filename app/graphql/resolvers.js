const db = require('../models');

const resolvers = {
  Query: {
    getOwner: async (root, { _id }) => db.Owner.findOne({ _id }),
    owners: async (root, args) => db.Owner.find({}),
  },
  Mutation: {
    addOwner: (root, args) => {
      const newOwner = new db.Owner({
        title: args.title,
        firstName: args.firstName,
        lastName: args.lastName,
        username: args.username,
        password: args.password,
        email: args.email,
      });
      return new Promise((resolve, reject) => {
        newOwner.save((err) => {
          if (err) reject(err);
          else resolve(newOwner);
        });
      });
    },
  },
};

module.exports = resolvers;
