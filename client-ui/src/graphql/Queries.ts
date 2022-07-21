import { gql } from '@apollo/client';

export const GET_CURR_USER = gql`
  query GET_CURR_USER($username: String) {
    users(where: { username: { equals: $username } }) {
      id
      username
      roles
      firstName
      lastName
    }
  }
`;

export const GET_APPLICANTS_BY_USER = gql`
  query GET_APPLICANTS_BY_USER($where: ApplicantWhereInput) {
    applicants(where: $where, orderBy: { updatedAt: Desc }) {
      id
      personalInfo {
        id
        firstName
        lastName
        email
        mobile
        countryOfBirth
        countriesOfCitizenship
        inzClientNumber
        nzAddress
        homeCountryAddress
        passportNumber
        createdAt
        updatedAt
      }
      educationHistories {
        id
      }
      employmentHistories {
        id
      }
      familyMembers {
        id
      }
      travelHistories {
        id
      }
      createdAt
      updatedAt
    }
  }
`;

export const PERSONAL_INFO_BY_APPLICANT_ID = gql`
  query PERSONAL_INFO_BY_APPLICANT_ID($applicant: ApplicantWhereUniqueInput) {
    personalInfos(where: { applicant: $applicant }) {
      id
      firstName
      lastName
      email
      mobile
      countryOfBirth
      countriesOfCitizenship
      inzClientNumber
      nzAddress
      homeCountryAddress
      passportNumber
      createdAt
      updatedAt
    }
  }
`;
