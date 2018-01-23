const { ObjectId } = require('mongodb');
const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {
  User, Contractee, PaymentContract, Business,
} = require('../models/index');
const {
  businessLogic, userLogic, contracteeLogic, paymentContractLogic,
} = require('./authLogic');
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
    user() {
      return User.find({}, (err, result) => {
        if (err) throw err;
        return result;
      });
    },
    contracts() {
      return true;
    },
  },
  User: {
    business({ business }) {
      return Business.findOne(ObjectId(business), (err, result) => {
        if (err) throw err;
        return result;
      });
    },
  },
  Contractee: {
    business({ business }) {
      return Business.findOne(ObjectId(business), (err, result) => {
        if (err) throw err;
        return result;
      });
    },
    paymentContract({ _id }) {
      return PaymentContract.findOne(ObjectId(_id), (err, result) => {
        if (err) throw err;
        return result;
      });
    },
  },
  PaymentContract: {
    contractee({ contractee }) {
      return Contractee.findOne(ObjectId(contractee), (err, result) => {
        if (err) throw err;
        return result;
      });
    },
  },
  Query: {
    getContracts(root, args, context) {
      return contracteeLogic.getContracts(root, args, context);
    },
  },
  Mutation: {
    login(root, { username, password }, context) {
      return User.findOne({ username }).then((user) => {
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
      });
    },
    signup(root, {
      firstName, lastName, email, username, password, role,
    }, context) {
      return User.findOne({ username }).then((existing) => {
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
      });
    },
    addBusiness(root, args, context) {
      return businessLogic.addBusiness(root, args, context)
        .then(business => business);
    },
    addUser(root, args, context) {
      return userLogic.addUser(root, args, context)
        .then(user => user);
    },
    addContractee(root, args, context) {
      return contracteeLogic.addContractee(root, args, context)
        .then(contractee => contractee);
    },
    addPaymentContract(root, args, context) {
      return paymentContractLogic.addPaymentContract(root, args, context)
        .then(paymentContract => paymentContract);
    },
  },
};

module.exports = resolvers;
