const { gql } = require('apollo-server');

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

  type Token {
    token: String
  }

  type Query {
    #USER
    getUser(id: ID, username: String): User
  }

  type Mutation {
    #Create a new User
    register(input: UserInput): User
    login(input: LoginInput): Token
  }
`;

module.exports = typeDefs;
