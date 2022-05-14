const UserController = require('../controllers/UserController');
const { GraphQLUpload } = require('graphql-upload');

const resolvers = {
  Upload: GraphQLUpload,
  Query: {
    //User
    getUser: (_, { id, username }) => UserController.getUser(id, username),
    refreshToken: (_, { req }) => UserController.refreshToken(req),
    searchUsers: (_, { search }) => UserController.searchUsers(search),
  },
  Mutation: {
    //User
    register: (_, { input }) => UserController.register(input),
    login: (_, { input }) => UserController.login(input),
    updateAvatar: (_, { file }, ctx) => UserController.updateAvatar(file, ctx),
    deleteAvatar: (_, __, ctx) => UserController.deleteAvatar(ctx),
    updateUser: (_, { input }, ctx) => UserController.updateUser(input, ctx),
  },
};

//exportar resolver
module.exports = resolvers;
