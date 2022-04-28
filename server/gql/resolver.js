const UserController = require('../controllers/UserController');

const resolvers = {
  Query: {
    //User
    getUser: (_, { id, username }) => UserController.getUser(id, username),
  },
  Mutation: {
    //User
    register: (_, { input }) => UserController.register(input),
    login: (_, { input }) => UserController.login(input),
  },
};

//exportar resolver
module.exports = resolvers;
