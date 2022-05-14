const { gql } = require('apollo-server-express');

const typeDefs = gql`
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
    refreshToken: String
  }

  type UpdateAvatar {
    status: Boolean
    urlAvatar: String
  }

  scalar Upload

  input UserInput {
    name: String!
    username: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
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
    refreshToken: Token

    #FOLLOW
    isFollow(username: String!): Boolean
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
  }
`;

module.exports = typeDefs;
