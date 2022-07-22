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

export const EDUCATION_HISTORIES = gql`
  query EDUCATION_HISTORIES (
    $orderBy: [EducationHistoryOrderByInput!]
    $skip: Float
    $take: Float
    $where: EducationHistoryWhereInput
  ) {
    educationHistories (
      orderBy: $orderBy
      skip: $skip
      take: $take
      where: $where
    ) {
      id
      institutionName
      isCurrentInstitution
      qualificationGained
      startDate
      endDate
      city
      country
      additionalInfo
      createdAt
      updatedAt
      createdBy {
        id
        username
      }
      updatedBy {
        id
        username
      }
    }
  }
`;

export const EDUCATION_HISTORY = gql`
  query EDUCATION_HISTORY ($where: EducationHistoryWhereUniqueInput!) {
    educationHistory (
      where: $where
    ) {
      id
      institutionName
      isCurrentInstitution
      qualificationGained
      startDate
      endDate
      city
      country
      additionalInfo
      createdAt
      updatedAt
      createdBy {
        id
        username
      }
      updatedBy {
        id
        username
      }
    }
  }
`;

export const EMPLOYMENT_HISTORIES = gql`
  query EMPLOYMENT_HISTORIES (
    $orderBy: [EmploymentHistoryOrderByInput!]
    $skip: Float
    $take: Float
    $where: EmploymentHistoryWhereInput
  ) {
    employmentHistories (
      orderBy: $orderBy
      skip: $skip
      take: $take
      where: $where
    ) {
      id
      jobTitle
      duties
      employmentType
      startDate
      endDate
      cityOfWork
      countryOfWork
      additionalInfo
      createdAt
      updatedAt
      createdBy {
        id
        username
      }
      updatedBy {
        id
        username
      }
    }
  }
`;

export const EMPLOYMENT_HISTORY = gql`
  query EMPLOYMENT_HISTORY ($where: EmploymentHistoryWhereUniqueInput!) {
    employmentHistory (where: $where) {
      id
    }
  }
`;
