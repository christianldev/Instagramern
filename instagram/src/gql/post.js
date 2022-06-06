import { gql } from '@apollo/client';

export const PUBLISH_POST = gql`
  mutation Publish($input: PublicationInput, $file: Upload) {
    publish(input: $input, file: $file) {
      status
      urlFile
    }
  }
`;

export const GET_PUBLICATIONS = gql`
  query GetPublications($username: String!) {
    getPublications(username: $username) {
      _id
      title
      description
      file
      createAt
      idUser {
        name
        username
        avatar
      }
    }
  }
`;

export const GET_FOLLOWING_PUBLICATIONS = gql`
  query GetFollowingPublications {
    getFollowingPublications {
      _id
      typeFile
      file
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
