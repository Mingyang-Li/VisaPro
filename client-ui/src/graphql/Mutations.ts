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

export const UPDATE_PERSONAL_INFO_BY_ID = gql`
  mutation {
    updatePersonalInfo(
      where: { id: "cl2ohcya75800a0u2edb47zqr" }
      data: {
        firstName: "Test"
        lastName: "1"
        email: "test1@gmail.com"
        mobile: "123456789"
        nzAddress: "234 cow rd, sheepland"
        homeCountryAddress: "1 polar bear road, Quebec, Canada"
        inzClientNumber: "FDGHV4545"
        passportNumber: "V5BV4B45"
        countriesOfCitizenship: "North Korea"
        countryOfBirth: "India"
        dateOfBirth: "Fri Jul 01 2022 00:00:00 GMT+1200 (New Zealand Standard Time)"
        updatedBy: { id: "cl1zup0hr25785su22imjp419" }
      }
    ) {
      firstName
      lastName
      email
      mobile
      nzAddress
      homeCountryAddress
      inzClientNumber
      passportNumber
      countriesOfCitizenship
      countryOfBirth
      dateOfBirth
      updatedAt
      updatedBy {
        id
        email
      }
    }
  }
`;
