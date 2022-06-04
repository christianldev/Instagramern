import { gql } from '@apollo/client';

export const ADD_COMMENT = gql`
  mutation AddComment($input: CommentInput) {
    addComment(input: $input) {
      _id
      idPublication
      comment
      date
      idUser {
        name
        username
        avatar
      }
    }
  }
`;

export const GET_COMMENTS = gql`
  query GetComments($idPublication: ID!) {
    getComments(idPublication: $idPublication) {
      _id
      idPublication
      comment
      date
      idUser {
        name
        username
        avatar
      }
    }
  }
`;
