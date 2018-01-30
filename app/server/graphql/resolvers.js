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
    contracts({ id }) {
      return Contractee.find({ business: id }, (err, result) => {
        if (err) throw err;
        return result;
      });
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
      return PaymentContract.findOne({ contractee: ObjectId(_id) }, (err, result) => {
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
  DeleteMessage: {
    message() {
      return 'Delete successful';
    },
  },
  Query: {
    getUser(root, args, context) {
      return context.user.then((user) => {
        console.log(context);
        if (!user) {
          console.log(`The user is ${user}`);
          return Promise.reject(Error('Not a user'));
        }
        return User.findById(ObjectId(user._id));
      });
    },
    getContracts(root, args, context) {
      return contracteeLogic.getBizContracts(root, args, context)
        .then(contracts => contracts);
    },
    getContract(root, args, context) {
      return contracteeLogic.getBizContract(root, args, context)
        .then(contract => contract);
    },
    getUsers(root, args, context) {
      return userLogic.getAllUsers(root, args, context)
        .then(users => users);
    },
    getPaymentContract(root, args, context) {
      return paymentContractLogic.getPaymentContract(root, args, context)
        .then(paymentContract => paymentContract);
    },
    getBusiness(root, args, context) {
      return businessLogic.getBusiness(root, args, context)
        .then(business => business);
    },
  },
  Mutation: {
    login(root, { username, password }, context) {
      return User.findOne({ username }).then((user) => {
        if (user) {
          return bcrypt.compare(password, user.password).then((res) => {
            if (res) {
              const token = jwt.sign({ id: user.id, email: user.email, version: user.version }, process.env.JWT_SECRET);
              user.jwt = token;
              context.user = Promise.resolve(user);
              console.log(context);
              return user;
            }
            return Promise.reject(Error('password incorrect'));
          });
        }
        return Promise.reject(Error('username not found'));
      });
    },
    signup(root, {
      firstName, lastName, email, username, password,
    }, context) {
      return User.findOne({ username }).then((existing) => {
        if (!existing) {
          return bcrypt.hash(password, 10).then(hash => User.create({
            firstName,
            lastName,
            email,
            password: hash,
            username,
            role: 'owner',
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
    deleteContract(root, args, context) {
      return contracteeLogic.deleteContract(root, args, context)
        .then(message => message);
    },
    updateContract(root, args, context) {
      return contracteeLogic.updateContract(root, args, context)
        .then(contract => contract);
    },
    updatePaymentContract(root, args, context) {
      return paymentContractLogic.updatePaymentContract(root, args, context)
        .then(contract => contract);
    },
  },
};

module.exports = resolvers;
