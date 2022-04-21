const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID
    name: String
    username: String
  }

  type Query {
    # Get one User by id
    getUser: User
  }
`;

module.exports = typeDefs;
