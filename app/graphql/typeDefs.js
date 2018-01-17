const typeDefs = [`
  scalar Date
  type Business {
    _id: String
    name: String
    logo: String
    owner: Owner
  }
  type Contractee {
    _id: String,
    contract_id: String
    first_name: String
    last_name: String
    email: String
    address: String
    created_at: Date
    completed: Boolean
    status: Boolean
    business: Business
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
    _id: String
    contractee: Contractee
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
    getUsers: [User]
    getUser(_id: String): User
    getContractee(_id: String): Contractee
    getContractees: [Contractee]
    getPaymentContract(_id: String): PaymentContract
    getPaymentContracts: [PaymentContract]
  }
  type Mutation {
    addOwner(firstName: String, lastName: String, username: String, password: String, email: String): Owner
    addBusiness(name: String, logo: String, owner: String): Business
    addUser(firstName: String, lastName: String, username: String, password: String, email: String, business: String): User
    addContractee(first_name: String, last_name: String, email: String, address: String, business: String): Contractee
    addPaymentContract(contractee: String, total: Int, fees: Int, down_payment: Int, insurance: Int, range: Int, monthly_payment: Int, terms: String): PaymentContract
  }
  schema {
    query: Query
    mutation: Mutation
  }
`];

module.exports = typeDefs;
