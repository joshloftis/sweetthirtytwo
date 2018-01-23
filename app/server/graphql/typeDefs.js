const typeDefs = [`
  scalar Date
  type Business {
    _id: String
    name: String
    logo: String
    user: User
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
    email: String
    created_at: Date
    business: Business
    role: String
    jwt: String
  }
  type Query {
    getBusiness(_id: String): Business
    getBusinesses: [Business]
    getUsers: [User]
    getUser(_id: String): User
    getContractee(_id: String): Contractee
    getContractees: [Contractee]
    getPaymentContract(_id: String): PaymentContract
    getPaymentContracts: [PaymentContract]
  }
  type Mutation {
    login(username: String, password: String): User
    addBusiness(name: String, logo: String, user: String): Business
    signup(firstName: String, lastName: String, username: String, password: String, email: String, business: String, role: String): User
    addContractee(first_name: String, last_name: String, email: String, address: String, business: String): Contractee
    addPaymentContract(contractee: String, total: Int, fees: Int, down_payment: Int, insurance: Int, range: Int, monthly_payment: Int, terms: String): PaymentContract
    addUser(id: String, firstName: String, lastName: String, username: String, password: String, email: String): User
  }
  schema {
    query: Query
    mutation: Mutation
  }
`];

module.exports = typeDefs;
