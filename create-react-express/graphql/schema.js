const mongoose = require('mongoose');
const Owner = require('../models/Owner');

const { Schema } = mongoose;
const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
} = graphql;

const OwnerType = new GraphQLObjectType({
  name: 'user',
  fields: () => ({
    _id: {
      type: GraphQLID,
      description: 'DB ID',
    },
    firstName: {
      type: GraphQLString,
      description: 'First Name',
    },
    lastName: {
      type: GraphQLString,
      description: 'Last Name',
    },
    username: {
      type: GraphQLString,
      description: 'Username',
    },
    password: {
      type: GraphQLString,
      description: 'Password',
    },
    email: {
      type: GraphQLString,
      description: 'Last Name',
    },
  }),
});

const promiseListOwners = () => new Promise((resolve, reject) => {
  Owner.find((err, owner) => {
    if (err) reject(err);
    else resolve(owner);
  });
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    owners: {
      type: new GraphQLList(OwnerType),
      resolve: () => promiseListOwners(),
    },
  }),
});

const MutationAddOwner = {
  type: OwnerType,
  description: 'Add an Owner',
  args: {
    firstName: {
      name: 'First name',
      type: new GraphQLNonNull(GraphQLString),
    },
    lastName: {
      name: 'Last name',
      type: new GraphQLNonNull(GraphQLString),
    },
    username: {
      name: 'Username',
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      name: 'Password',
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      name: 'Email',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (root, args) => {
    const newOwner = new Owner({
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
};

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    owner: MutationAddOwner,
  },
});

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
