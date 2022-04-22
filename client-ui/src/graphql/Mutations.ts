import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation ($username: String!, $password: String!) {
    login(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;
