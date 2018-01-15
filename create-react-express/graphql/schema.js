
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

const TODO = mongoose.model('Todo', new Schema({
  id: mongoose.Schema.Types.ObjectId,
  title: String,
  completed: Boolean,
}));

const TodoType = new GraphQLObjectType({
  name: 'todo',
  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'Todo id',
    },
    title: {
      type: GraphQLString,
      description: 'Task title',
    },
    completed: {
      type: GraphQLBoolean,
      description: 'Flag to mark if the task is completed',
    },
  }),
});

const OwnerType = new GraphQLObjectType({
  name: 'user',
  fields: () => ({
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

const promiseListAll = () => new Promise((resolve, reject) => {
  TODO.find((err, todos) => {
    if (err) reject(err);
    else resolve(todos);
  });
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    todos: {
      type: new GraphQLList(TodoType),
      resolve: () => promiseListAll(),
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
    newOwner.id = newOwner._id;
    return new Promise((resolve, reject) => {
      newOwner.save((err) => {
        if (err) reject(err);
        else resolve(newOwner);
      });
    });
  },
};

const MutationAdd = {
  type: TodoType,
  description: 'Add a Todo',
  args: {
    title: {
      name: 'Todo title',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (root, args) => {
    const newTodo = new TODO({
      title: args.title,
      completed: false,
    });
    newTodo.id = newTodo._id;
    return new Promise((resolve, reject) => {
      newTodo.save((err) => {
        if (err) reject(err);
        else resolve(newTodo);
      });
    });
  },
};

const MutationToggle = {
  type: TodoType,
  description: 'Toggle the todo',
  args: {
    id: {
      name: 'Todo Id',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (root, args) => new Promise((resolve, reject) => {
    TODO.findById(args.id, (err, todo) => {
      if (err) {
        reject(err);
        return;
      }
      if (!todo) {
        reject('Todo NOT found');
        return;
      }
      todo.completed = !todo.completed;
      todo.save((err) => {
        if (err) reject(err);
        else resolve(todo);
      });
    });
  }),
};

const MutationDestroy = {
  type: TodoType,
  description: 'Destroy the todo',
  args: {
    id: {
      name: 'Todo Id',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (root, args) => new Promise((resolve, reject) => {
    TODO.findById(args.id, (err, todo) => {
      if (err) {
        reject(err);
      } else if (!todo) {
        reject('Todo NOT found');
      } else {
        todo.remove((err) => {
          if (err) reject(err);
          else resolve(todo);
        });
      }
    });
  }),
};

const MutationToggleAll = {
  type: new GraphQLList(TodoType),
  description: 'Toggle all todos',
  args: {
    checked: {
      name: 'Todo Id',
      type: new GraphQLNonNull(GraphQLBoolean),
    },
  },
  resolve: (root, args) => new Promise((resolve, reject) => {
    TODO.find((err, todos) => {
      if (err) {
        reject(err);
        return;
      }
      TODO.update({
        _id: {
          $in: todos.map(todo => todo._id),
        },
      }, {
        completed: args.checked,
      }, {
        multi: true,
      }, (err) => {
        if (err) reject(err);
        else promiseListAll().then(resolve, reject);
      });
    });
  }),
};

const MutationClearCompleted = {
  type: new GraphQLList(TodoType),
  description: 'Clear completed',
  resolve: () => new Promise((resolve, reject) => {
    TODO.find({ completed: true }, (err, todos) => {
      if (err) {
        reject(err);
      } else {
        TODO.remove({
          _id: {
            $in: todos.map(todo => todo._id),
          },
        }, (err) => {
          if (err) reject(err);
          else resolve(todos);
        });
      }
    });
  }),
};

const MutationSave = {
  type: TodoType,
  description: 'Edit a todo',
  args: {
    id: {
      name: 'Todo Id',
      type: new GraphQLNonNull(GraphQLString),
    },
    title: {
      name: 'Todo title',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (root, args) => new Promise((resolve, reject) => {
    TODO.findById(args.id, (err, todo) => {
      if (err) {
        reject(err);
        return;
      }
      if (!todo) {
        reject('Todo NOT found');
        return;
      }
      todo.title = args.title;
      todo.save((err) => {
        if (err) reject(err);
        else resolve(todo);
      });
    });
  }),
};

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    add: MutationAdd,
    toggle: MutationToggle,
    toggleAll: MutationToggleAll,
    destroy: MutationDestroy,
    clearCompleted: MutationClearCompleted,
    save: MutationSave,
    owner: MutationAddOwner,
  },
});

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
