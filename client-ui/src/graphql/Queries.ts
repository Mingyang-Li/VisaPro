import { gql } from '@apollo/client';

export const GET_USER_AND_APPLICANTS = gql`
  query GET_USER($username: String) {
    users(where: { username: { equals: $username } }) {
      id
      username
      email
      roles
      firstName
      lastName
    }
  }

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
    }
  }
`;

export const GET_CURR_USER = gql`
  query GET_CURR_USER($username: String) {
    users(where: { username: { equals: $username } }) {
      id
      username
      email
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

export const PERSONAL_INFOS = gql`
  query PERSONAL_INFOS(
    $orderBy: [PersonalInfoOrderByInput!]
    $skip: Float
    $take: Float
    $where: PersonalInfoWhereInput
  ) {
    personalInfos(orderBy: $orderBy, skip: $skip, take: $take, where: $where) {
      id
      firstName
      lastName
      email
      mobile
      countryOfBirth
      dateOfBirth
      countriesOfCitizenship
      inzClientNumber
      nzAddress
      homeCountryAddress
      passportNumber
      createdAt
      updatedAt
      additionalInfo
    }
  }
`;

export const EDUCATION_HISTORIES = gql`
  query EDUCATION_HISTORIES(
    $orderBy: [EducationHistoryOrderByInput!]
    $skip: Float
    $take: Float
    $where: EducationHistoryWhereInput
  ) {
    educationHistories(
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
  query EDUCATION_HISTORY($where: EducationHistoryWhereUniqueInput!) {
    educationHistory(where: $where) {
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
    }
  }
`;

export const EMPLOYMENT_HISTORIES = gql`
  query EMPLOYMENT_HISTORIES(
    $orderBy: [EmploymentHistoryOrderByInput!]
    $skip: Float
    $take: Float
    $where: EmploymentHistoryWhereInput
  ) {
    employmentHistories(
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
  query EMPLOYMENT_HISTORY($where: EmploymentHistoryWhereUniqueInput!) {
    employmentHistory(where: $where) {
      id
    }
  }
`;

export const TRAVEL_HISTORIES = gql`
  query TRAVEL_HISTORIES(
    $orderBy: [TravelHistoryOrderByInput!]
    $skip: Float
    $take: Float
    $where: TravelHistoryWhereInput
  ) {
    travelHistories(
      orderBy: $orderBy
      skip: $skip
      take: $take
      where: $where
    ) {
      id
    }
  }
`;

export const TRAVEL_HISTORY = gql`
  query TRAVEL_HISTORY($where: TravelHistoryWhereUniqueInput!) {
    travelHistory(where: $where) {
      id
    }
  }
`;

export const FAMILY_MEMBERS = gql`
  query FAMILY_MEMBERS(
    $orderBy: [FamilyMemberOrderByInput!]
    $skip: Float
    $take: Float
    $where: FamilyMemberWhereInput
  ) {
    familyMembers(orderBy: $orderBy, skip: $skip, take: $take, where: $where) {
      id
    }
  }
`;

export const FAMILY_MEMBER = gql`
  query FAMILY_MEMBER($where: FamilyMemberWhereUniqueInput!) {
    familyMember(where: $where) {
      id
    }
  }
`;
