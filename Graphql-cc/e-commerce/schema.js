const gql = require('graphql-tag');

const typeDefs = gql`
    type Query {
        hello: String!
        products: [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
    }
    type Product {
        id: ID!
        name: String!
        description: String!
        quantity: Int!
        image: String!
        price: Float!
        onSale: Boolean!
        category: Category
    }
    type Category {
        id: ID!
        name: String!
        products:[Product!]!
    }

`

module.exports = { typeDefs };