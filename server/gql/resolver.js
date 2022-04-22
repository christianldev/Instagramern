const UserController = require('../controllers/UserController');

const resolvers = {
  Query: {
    //User
    getUser: () => UserController.getUser(),
  },
  Mutation: {
    //User
    register: async (_, { input }) => UserController.register(input),
  },
};

//exportar resolver
module.exports = resolvers;
