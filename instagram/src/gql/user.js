import { gql } from '@apollo/client';

export const REGISTER = gql`
  mutation Login($input: UserInput) {
    register(input: $input) {
      id
      name
      username
      email
      createAt
    }
  }
`;

export const LOGIN = gql`
  mutation Login($input: LoginInput) {
    login(input: $input) {
      token
    }
  }
`;

export const GET__USER = gql`
  query GetUser($getUserId: ID, $username: String) {
    getUser(id: $getUserId, username: $username) {
      id
      name
      username
      email
      avatar
      description
      siteWeb
    }
  }
`;
