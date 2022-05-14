import { gql } from '@apollo/client';

export const FOLLOW_USER = gql`
  mutation Follow($username: String!) {
    follow(username: $username)
  }
`;
