const { ObjectId } = require('mongodb');
const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {
  User, Contractee, PaymentContract, Business,
} = require('../models/index');
const { businessLogic } = require('./authLogic');
const dotenv = require('dotenv').config();

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
    user: ({ user }) => User.findOne(ObjectId(user), (err, result) => {
      if (err) throw err;
      return result;
    }),
  },
  User: {
    business: async ({ business }) => Business.findOne(ObjectId(business), (err, result) => {
      if (err) throw err;
      return result;
    }),
  },
  Contractee: {
    business: async ({ business }) => Business.findOne(ObjectId(business), (err, result) => {
      if (err) throw err;
      return result;
    }),
  },
  PaymentContract: {
    contractee: async ({ contractee }) => Contractee.findOne(ObjectId(contractee), (err, result) => {
      if (err) throw err;
      return result;
    }),
  },
  Query: {
    getBusiness: (root, { _id }) => Business.findOne(ObjectId(_id), (err, business) => {
      if (err) throw err;
      return business;
    }),
    getBusinesses: () => Business.find({}, (err, business) => {
      if (err) throw err;
      return business;
    }),
    getUser: (root, { _id }) => User.findOne(ObjectId(_id), (err, user) => {
      if (err) throw err;
      return user;
    }),
    getUsers: () => User.find({}, (err, users) => {
      if (err) throw err;
      return users;
    }),
    getContractee: (root, { _id }) => Contractee.findOne(ObjectId(_id), (err, user) => {
      if (err) throw err;
      return user;
    }),
    getContractees: () => Contractee.find({}, (err, users) => {
      if (err) throw err;
      return users;
    }),
    getPaymentContract: (root, { _id }) => PaymentContract.findOne(ObjectId(_id), (err, contract) => {
      if (err) throw err;
      return contract;
    }),
    getPaymentContracts: () => PaymentContract.find({}, (err, contracts) => {
      if (err) throw err;
      return contracts;
    }),
  },
  Mutation: {
    login: (root, { username, password }, context) => User.findOne({ username }).then((user) => {
      if (user) {
        return bcrypt.compare(password, user.password).then((res) => {
          if (res) {
            const token = jwt.sign({
              id: user.id,
              email: user.email,
              version: user.version,
            }, process.env.JWT_SECRET);
            user.jwt = token;
            context.user = Promise.resolve(user);
            return user;
          }
          return Promise.reject(Error('password incorrect'));
        });
      }
      return Promise.reject(Error('username not found'));
    }),
    signup: (root, {
      firstName, lastName, email, username, password, role,
    }, context) => User.findOne({ username }).then((existing) => {
      if (!existing) {
        return bcrypt.hash(password, 10).then(hash => User.create({
          firstName,
          lastName,
          email,
          password: hash,
          username,
          role,
        })).then((user) => {
          const { id } = user;
          const token = jwt.sign({ id, email }, process.env.JWT_SECRET);
          user.jwt = token;
          context.user = Promise.resolve(user);
          return user;
        });
      }
      return Promise.reject(Error('Username already exists!'));
    }),
    addBusiness(root, args, context) {
      return businessLogic.addBusiness(root, args, context)
        .then((business) => {
          console.log(business);
          return business;
        });
    },
  },
};

module.exports = resolvers;
