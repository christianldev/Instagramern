import { gql } from '@apollo/client';

export const GET_COUNT_LIKES = gql`
  query Query($idPublication: ID!) {
    getCountLikes(idPublication: $idPublication)
  }
`;

export const ADD_LIKE = gql`
  mutation AddLike($idPublication: ID!) {
    addLike(idPublication: $idPublication)
  }
`;

export const REMOVE_LIKE = gql`
  mutation RemoveLike($idPublication: ID!) {
    removeLike(idPublication: $idPublication)
  }
`;

export const ADD_LIKE_SUBSCRIPTION = gql`
  subscription LikeAdded {
    likeAdded {
      id
      title
      description
      createAt
      idUser {
        name
        username
        avatar
      }
    }
  }
`;

export const REMOVE_LIKE_SUBSCRIPTION = gql`
  subscription LikeRemoved {
    likeRemoved {
      title
      description
      idUser {
        name
        username
        avatar
      }
    }
  }
`;

export const IS_LIKE = gql`
  query Query($idPublication: ID!) {
    isLike(idPublication: $idPublication)
  }
`;
