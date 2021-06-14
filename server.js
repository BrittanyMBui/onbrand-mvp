require('dotenv').config();
const { ApolloServer, PubSub } = require('apollo-server');
const mongoose = require('mongoose');

// const typeDefs = require('./graphql/typeDefs');
const connectionString = process.env.MONGODB_URI;

const pubsub = new PubSub();

// const server = new ApolloServer({
//     typeDefs,
//     context: ({ req }) => ({ req, pubsub })
// });

mongoose
    .connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('MongoDB connected');
        return server.listen( {port: 4000 });
    })
    .then((res) => {
        console.log(`Server listening at ${res.url}`)
    })