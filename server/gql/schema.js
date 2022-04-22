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

  type Query {
    # Get one User by id
    getUser: User
  }
`;

module.exports = typeDefs;
