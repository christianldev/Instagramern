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

export const GET_FOLLOWERS = gql`
  query GetFollowers($username: String!) {
    getFollowers(username: $username) {
      id
      username
      name
      avatar
    }
  }
`;

export const GET_FOLLOWING = gql`
  query GetFollowing($username: String!) {
    getFollowing(username: $username) {
      id
      name
      username
      avatar
    }
  }
`;

export const FOLLOW_ADDED = gql`
  subscription FollowAdded {
    followAdded {
      id
      name
      username
      email
      avatar
    }
  }
`;

export const UNFOLLOW_ADDED = gql`
  subscription UnFollowAdded {
    unFollowAdded {
      id
      name
      username
      email
      avatar
    }
  }
`;

export const GET_NOT_FOLLOWING = gql`
  query GetNotFollowing {
    getNotFollowing {
      id
      name
      username
      email
      avatar
    }
  }
`;
