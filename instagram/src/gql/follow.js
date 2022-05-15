import { gql } from '@apollo/client';

export const IS_FOLLOW = gql`
  query Query($username: String!) {
    isFollow(username: $username)
  }
`;

export const FOLLOW_USER = gql`
  mutation Follow($username: String!) {
    follow(username: $username)
  }
`;

export const UNFOLLOW_USER = gql`
  mutation UnFollow($username: String!) {
    unFollow(username: $username)
  }
`;
