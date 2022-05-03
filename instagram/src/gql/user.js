import { gql } from '@apollo/client';

export const REGISTER = gql`
  mutation Register($input: UserInput) {
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

export const UPDATE_AVATAR = gql`
  mutation UpdateAvatar($file: Upload) {
    updateAvatar(file: $file) {
      status
      urlAvatar
    }
  }
`;
