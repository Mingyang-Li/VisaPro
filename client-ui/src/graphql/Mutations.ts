import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation ($username: String!, $password: String!) {
    login(credentials: { username: $username, password: $password }) {
      roles
      username
      accessToken
    }
  }
`;

export const CREATE_PERSONAL_INFO = gql`
  mutation (
    $firstName: String
    $lastName: String
    $email: String
    $createdBy: UserWhereUniqueInput
    $applicant: ApplicantWhereUniqueInput
  ) {
    createPersonalInfo(
      data: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        createdBy: $createdBy
        applicant: $applicant
      }
    ) {
      id
    }
  }
`;

export const CREATE_APPLICANT = gql`
  mutation ($createdBy: UserWhereUniqueInput) {
    createApplicant(data: { createdBy: $createdBy, archived: false }) {
      id
    }
  }
`;
