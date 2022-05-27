const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Upload

  type User {
    id: ID
    name: String
    username: String
    email: String
    avatar: String
    siteWeb: String
    description: String
    password: String
    createAt: String
  }
  type Token {
    token: String
  }

  type UpdateAvatar {
    status: Boolean
    urlAvatar: String
  }

  type Publish {
    status: Boolean
    urlFile: String
  }

  input UserInput {
    name: String!
    username: String!
    email: String!
    password: String!
  }

  input LoginInput {
    # login with email or username
    email: String!
    username: String
    password: String!
  }

  input UserUdateInput {
    name: String
    username: String
    email: String
    currentPassword: String
    newPassword: String
    siteWeb: String
    description: String
  }

  type Query {
    #USER
    getUser(id: ID, username: String): User
    searchUsers(search: String): [User]

    #FOLLOW
    isFollow(username: String!): Boolean
    getFollowers(username: String!): [User]
    getFollowing(username: String!): [User]
  }

  type Mutation {
    #Create a new User
    register(input: UserInput): User!
    login(input: LoginInput): Token!
    updateAvatar(file: Upload): UpdateAvatar
    deleteAvatar: Boolean
    updateUser(input: UserUdateInput): Boolean

    #Follow
    follow(username: String!): Boolean
    unFollow(username: String!): Boolean

    #Publiccations
    publish(file: Upload): Publish
  }

  type Subscription {
    followAdded: User!
    unFollowAdded: User!
  }
`;

module.exports = typeDefs;
