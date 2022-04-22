import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation {
    login(credentials: { username: "mingyang", password: "mingyang" }) {
      accessToken
    }
  }
`;
