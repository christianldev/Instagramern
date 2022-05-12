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
  mutation updateAvatar($file: Upload) {
    updateAvatar(file: $file) {
      status
      urlAvatar
    }
  }
`;

export const DELETE_AVATAR = gql`
  mutation deleteAvatar {
    deleteAvatar
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateAvatar($input: UserUdateInput) {
    updateUser(input: $input)
  }
`;

export const SEARCH_USER = gql`
  query SearchUsers($search: String) {
    searchUsers(search: $search) {
      name
      username
      email
    }
  }
`;
