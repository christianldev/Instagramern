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
      id
      idUser
      file
      typeFile
      createAt
      title
      description
    }
  }
`;
