const typeDefs = [`
  type Query {
    getOwner(_id: String, firstName: String, lastName: String, username: String, email: String): Owner
    owners: [Owner]
  }
  type Owner {
    _id: String
    firstName: String
    lastName: String
    username: String
    password: String
    email: String
  }
  type Mutation {
    addOwner(firstName: String, lastName: String, username: String, password: String, email: String): Owner
  }
  schema {
    query: Query
    mutation: Mutation
  }
`];

module.exports = typeDefs;
