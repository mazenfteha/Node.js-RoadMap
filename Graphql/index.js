const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { resolvers } = require('./resolver.js');
const { typeDefs } = require('./models/typeDefs.js');
const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config()

const MONGO_URI = process.env.MONGO_DB

// Database connection
mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log(`Connected successfully to MongoDB`);
    })
    .catch(err => {
        console.log(err.message);
    });

const server = new ApolloServer({
    typeDefs,
    resolvers
});

startStandaloneServer(server, {
    listen: { port: 4000 },
}).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});