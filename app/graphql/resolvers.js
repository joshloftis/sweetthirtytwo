const { ObjectId } = require('mongodb');
const db = require('../models');
const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

const resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
  }),
  Business: {
    owner: async ({ owner }) => db.Owner.findOne(ObjectId(owner), (err, result) => {
      if (err) throw err;
      return result;
    }),
  },
  User: {
    business: async ({ business }) => db.Business.findOne(ObjectId(business), (err, result) => {
      if (err) throw err;
      return result;
    }),
  },
  Contractee: {
    business: async ({ business }) => db.Business.findOne(ObjectId(business), (err, result) => {
      if (err) throw err;
      return result;
    }),
  },
  Query: {
    getOwner: async (root, { _id }) => db.Owner.findOne(ObjectId(_id), (err, owner) => {
      if (err) throw err;
      return owner;
    }),
    getAllOwners: async (root, args) => db.Owner.find({}, (err, owners) => {
      if (err) throw err;
      return owners;
    }),
    getBusiness: async (root, { _id }) => db.Business.findOne(ObjectId(_id), (err, business) => {
      if (err) throw err;
      return business;
    }),
    getUser: async (root, { _id }) => db.User.findOne(ObjectId(_id), (err, user) => {
      if (err) throw err;
      return user;
    }),
    getUsers: async (root, args) => db.User.find({}, (err, users) => {
      if (err) throw err;
      return users;
    }),
    getContractee: async (root, { _id }) => db.Contractee.findOne(ObjectId(_id), (err, owner) => {
      if (err) throw err;
      return owner;
    }),
    getContractees: async (root, args) => db.Contractee.find({}, (err, owners) => {
      if (err) throw err;
      return owners;
    }),
  },
  Mutation: {
    addOwner: async (root, args, context, info) => {
      const res = await db.Owner.create(args);
      return db.Owner.findOne({ _id: res._id }, (err, owner) => {
        if (err) throw err;
        return owner;
      });
    },
    addBusiness: async (root, args, context, info) => {
      const res = await db.Business.create(args);
      return db.Business.findOne({ _id: res._id }, (err, business) => {
        if (err) throw err;
        return business;
      });
    },
    addUser: async (root, args, conext, info) => {
      const res = await db.User.create(args);
      return db.User.findOne({ _id: res._id }, (err, user) => {
        if (err) throw err;
        return user;
      });
    },
    addContractee: async (root, args, conext, info) => {
      const res = await db.Contractee.create(args);
      return db.Contractee.findOne({ _id: res._id }, (err, contractee) => {
        if (err) throw err;
        return contractee;
      });
    },
  },
};

module.exports = resolvers;
