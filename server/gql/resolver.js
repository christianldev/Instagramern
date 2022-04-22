const UserController = require('../controllers/UserController');

const resolvers = {
  Query: {
    //User
    getUser: () => UserController.getUser(),
  },
  Mutation: {
    //User
    register: (_, { input }) => UserController.register(input),
    login: (_, { input }) => UserController.login(input),
  },
};

//exportar resolver
module.exports = resolvers;
