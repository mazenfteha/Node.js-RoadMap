const gql = require('graphql-tag');

const typeDefs = gql`
    type Query {
        hello: String!
        products(filter: ProductFilterInput): [Product!]!
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
        reviews: [Reviews!]!
    }
    type Category {
        id: ID!
        name: String!
        products(filter: ProductFilterInput):[Product!]!
    }
    type Reviews {
        id: ID!
        date: String!
        title: String!
        comment: String!
        rating: Int!
    }
    input ProductFilterInput {
        onSale: Boolean
        avgRating: Int
    }

`

module.exports = { typeDefs };