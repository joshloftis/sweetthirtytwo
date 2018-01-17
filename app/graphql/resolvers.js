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
  },
};

module.exports = resolvers;
