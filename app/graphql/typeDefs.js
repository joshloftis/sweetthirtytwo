const typeDefs = [`
  scalar Date
  type Business {
    _id: String
    name: String
    logo: String
    owner: Owner
  }
  type Contractee {
    _id: String
    contract_id: Int
    first_name: String
    last_name: String
    email: String
    address: String
    dependency: [String]
    created_at: Date
  }
  type Owner {
    _id: String
    firstName: String
    lastName: String
    username: String
    password: String
    email: String
    created_at: Date
  }
  type PaymentContract {
    contract_id: String
    total: Int
    fees: Int
    down_payment: Int
    insurance: Int
    range: Int
    monthly_payment: Int
    terms: String
  }
  type User {
    _id: String
    firstName: String
    lastName: String
    username: String
    password: String
    email: String
    created_at: Date
    business: Business
  }
  type Query {
    getBusiness(_id: String): Business
    getBusinesses: [Business]
    getOwner(_id: String, firstName: String, lastName: String, username: String, email: String): Owner
    getAllOwners: [Owner]
  }
  type Mutation {
    addOwner(firstName: String, lastName: String, username: String, password: String, email: String): Owner
    addBusiness(name: String, logo: String, owner: String): Business
  }
  schema {
    query: Query
    mutation: Mutation
  }
`];

module.exports = typeDefs;
