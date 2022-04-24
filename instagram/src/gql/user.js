import { gql } from '@apollo/client';

export const REGISTER = gql`
  mutation Login($input: UserInput) {
    register(input: $input) {
      id
      name
      username
      email
      createAt
    }
  }
`;
