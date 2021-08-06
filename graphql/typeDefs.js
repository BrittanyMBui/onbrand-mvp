const { gql } = require('apollo-server');

module.exports = gql`
type User {
    id: ID!
    email: String!
    token: String!
    name: String!
    createdAt: String!
    pantSize: String
    pantFit: String
    shirtSize: String
    spend: String
}
type Product {
    id: ID!
    # user: String!
    productName: String!
    brand: String!
    category: String!
    brandType: String!
    url: String!
    img: String!
    price: Float!
    liked: Boolean
    disliked: Boolean
    description: String
}
input ProductInput {
    # user: String!
    productName: String!
    brand: String!
    category: String!
    brandType: String!
    url: String!
    img: String!
    price: Float!
    liked: Boolean
    disliked: Boolean
    description: String
}
input RegisterInput {
    name: String!
    password: String!
    confirmPassword: String!
    email: String!
    pantSize: String
    pantFit: String
    shirtSize: String
    spend: String
}
type Mutation {
    register(registerInput: RegisterInput): User!
    login(email: String!, password: String!): User!
    addProduct(productInput: ProductInput): Product!
}
type Query {
    users: [User]
    products: [Product]
    getProducts: [Product]
    getProduct(productId: ID!): Product
}
`;