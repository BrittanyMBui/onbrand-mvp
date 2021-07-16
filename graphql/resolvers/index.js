const usersResolvers = require('./users');
const productsResolvers = require('./products');

module.exports = {
    Mutation: {
        ...usersResolvers.Mutation,
        ...productsResolvers.Mutation
    }
}