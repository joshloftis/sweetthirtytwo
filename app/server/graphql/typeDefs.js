const typeDefs = [`
  scalar Date
  type Business {
    _id: String
    name: String
    logo: String
    user: [User]
    contracts: [Contractee]
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
    paymentContract: PaymentContract
    message: DeleteMessage
  }
  type PaymentContract {
    _id: String
    contractee: Contractee
    total: Float
    fees: Float
    down_payment: Float
    insurance: Float
    range: Float
    monthly_payment: Float
    terms: String
    message: DeleteMessage
  }
  type DeleteMessage {
    message: String
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
    getUser: User
    getContracts(businessId: String): [Contractee]
    getContract(businessId: String, contractId: String): Contractee
    getUsers(businessId: String): [User]
    getPaymentContract(contractId: String): PaymentContract
    getBusiness(id: String): Business
  }
  type Mutation {
    addBusiness(name: String, logo: String): Business
    addContractee(contract_id: String, first_name: String, last_name: String, email: String, address: String, business: String): Contractee
    addPaymentContract(contractee: String, total: Float, fees: Float, down_payment: Float, insurance: Float, range: Float, monthly_payment: Float, terms: String): Contractee
    addUser(firstName: String, lastName: String, username: String, password: String, email: String, business: String): User
    updateContract(userId: String!, contractee: String!, first_name: String, last_name: String, email: String, address: String, completed: Boolean, status: Boolean): Contractee
    updatePaymentContract(userId: String!, contractee: String!, total: Float, fees: Float, down_payment: Float, insurance: Float, range: Float, terms: String): Contractee
    deleteContract(contracteeId: String, userId: String): DeleteMessage
  }
  schema {
    query: Query
    mutation: Mutation
  }
`];

module.exports = typeDefs;
