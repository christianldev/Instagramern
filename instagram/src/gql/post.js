import { gql } from '@apollo/client';

export const PUBLISH_POST = gql`
  mutation Publish($file: Upload) {
    publish(file: $file) {
      status
      urlFile
    }
  }
`;
