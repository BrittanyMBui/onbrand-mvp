const { gql } = require('apollo-server');

module.exports = gql`
type User {
    id: ID!
    email: String!
    token: String!
    name: String!
    createdAt: String!
    # pantSize: String!
    # pantFit: String!
    # shirtSize: String!
    # spend: String!
}
input RegisterInput {
    name: String!
    password: String!
    confirmPassword: String!
    email: String!
    # pantSize: String!
    # pantFit: String!
    # shirtSize: String!
    # spend: String!
}
type Mutation {
    register(registerInput: RegisterInput): User!
    login(email: String!, password: String!): User!
}
type Query {
    users: [User]
}
`;