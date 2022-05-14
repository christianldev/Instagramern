const UserController = require('../controllers/UserController');
const FollowController = require('../controllers/FollowController');
const { GraphQLUpload } = require('graphql-upload');

const resolvers = {
  Upload: GraphQLUpload,
  Query: {
    //User
    getUser: (_, { id, username }) => UserController.getUser(id, username),
    refreshToken: (_, { req }) => UserController.refreshToken(req),
    searchUsers: (_, { search }) => UserController.searchUsers(search),

    //Follow
    isFollow: (_, { username }, ctx) =>
      FollowController.isFollow(username, ctx),
  },
  Mutation: {
    //User
    register: (_, { input }) => UserController.register(input),
    login: (_, { input }) => UserController.login(input),
    updateAvatar: (_, { file }, ctx) => UserController.updateAvatar(file, ctx),
    deleteAvatar: (_, __, ctx) => UserController.deleteAvatar(ctx),
    updateUser: (_, { input }, ctx) => UserController.updateUser(input, ctx),

    //follow
    follow: (_, { username }, ctx) => FollowController.follow(username, ctx),
    unFollow: (_, { username }, ctx) =>
      FollowController.unFollow(username, ctx),
  },
};

//exportar resolver
module.exports = resolvers;
