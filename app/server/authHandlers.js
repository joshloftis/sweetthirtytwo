const { Owner, User } = require('./models/index');

const getAuthenticatedUser = context => context.user.then((user) => {
  if (!user) {
    return Promise.reject('Unauthorized');
  }
  return user;
});

// function createMessage(_, { text, groupId }, ctx) {
//   return getAuthenticatedUser(ctx)
//     .then(user => user.getGroups({ where: { id: groupId }, attributes: ['id'] })
//       .then((group) => {
//         if (group.length) {
//           return Message.create({
//             userId: user.id,
//             text,
//             groupId,
//           });
//         }
//         return Promise.reject('Unauthorized');
//       }));
// }

function createMessage(_, args, ctx) {
  return function createMessage(_, { text, groupId }, ctx) {
    return getAuthenticatedUser(ctx)
      .then(user => user.getGroups({ where: { id: groupId }, attributes: ['id'] })
        .then((group) => {
          if (group.length) {
            return Message.create({
              userId: user.id,
              text,
              groupId,
            });
          }
          return Promise.reject('Unauthorized');
        }));
  }.then(message => message);
}

module.exports = {

};

