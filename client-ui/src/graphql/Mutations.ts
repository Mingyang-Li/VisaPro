import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation LOGIN($username: String!, $password: String!) {
    login(credentials: { username: $username, password: $password }) {
      roles
      username
      accessToken
    }
  }
`;

export const CREATE_PERSONAL_INFO = gql`
  mutation CREATE_PERSONAL_INFO($data: PersonalInfoCreateInput!) {
    createPersonalInfo(data: $data) {
      id
    }
  }
`;

export const CREATE_APPLICANT = gql`
  mutation CREATE_APPLICANT($data: ApplicantCreateInput!) {
    createApplicant(data: $data) {
      id
    }
  }
`;

export const UPDATE_PERSONAL_INFO_BY_ID = gql`
  mutation UPDATE_PERSONAL_INFO_BY_ID(
    # pk
    $id: String!
    # data
    $firstName: String
    $lastName: String
    $email: String
    $mobile: String
    $nzAddress: String
    $homeCountryAddress: String
    $inzClientNumber: String
    $passportNumber: String
    $countriesOfCitizenship: String
    $countryOfBirth: String
    $dateOfBirth: DateTime
    $updatedById: String!
  ) {
    updatePersonalInfo(
      where: { id: $id }
      data: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        mobile: $mobile
        nzAddress: $nzAddress
        homeCountryAddress: $homeCountryAddress
        inzClientNumber: $inzClientNumber
        passportNumber: $passportNumber
        countriesOfCitizenship: $countriesOfCitizenship
        countryOfBirth: $countryOfBirth
        dateOfBirth: $dateOfBirth
        updatedBy: { id: $updatedById }
      }
    ) {
      updatedAt
    }
  }
`;

export const CREATE_EDUCATION_HISTORY = gql`
  mutation CREATE_EDUCATION_HISTORY($data: EducationHistoryCreateInput!) {
    createEducationHistory(data: $data) {
      id
      createdAt
      createdBy {
        id
        username
      }
    }
  }
`;

export const UPDATE_EDUCATION_HISTORY_BY_ID = gql`
  mutation UPDATE_EDUCATION_HISTORY_BY_ID(
    $where: EducationHistoryWhereUniqueInput!
    $data: EducationHistoryUpdateInput!
  ) {
    updateEducationHistory(where: $where, data: $data) {
      id
      updatedAt
      updatedBy {
        id
        username
      }
    }
  }
`;

export const CREATE_EMPLOYMENT_HISOTRY = gql`
  mutation CREATE_EMPLOYMENT_HISOTRY($data: EmploymentHistoryCreateInput!) {
    createEmploymentHistory(data: $data) {
      id
      createdAt
      createdBy {
        id
        username
      }
    }
  }
`;

export const UPDATE_EMOLOYMENT_HISTORY = gql`
  mutation UPDATE_EMOLOYMENT_HISTORY(
    $where: EmploymentHistoryWhereUniqueInput!
    $data: EmploymentHistoryUpdateInput!
  ) {
    updateEmploymentHistory(where: $where, data: $data) {
      id
      updatedAt
    }
  }
`;

export const CREATE_TRAVEL_HISTORY = gql`
  mutation CREATE_TRAVEL_HISTORY($data: TravelHistoryCreateInput!) {
    createTravelHistory(data: $data) {
      id
      createdAt
    }
  }
`;

export const UPDATE_TRAVEL_HISTORY = gql`
  mutation UPDATE_TRAVEL_HISTORY(
    $where: TravelHistoryWhereUniqueInput!
    $data: TravelHistoryUpdateInput!
  ) {
    updateTravelHistory(where: $where, data: $data) {
      id
      updatedAt
    }
  }
`;

export const CREATE_FAMILY_MEMBER = gql`
  mutation CREATE_FAMILY_MEMBER($data: FamilyMemberCreateInput!) {
    createFamilyMember(data: $data) {
      id
      createdAt
    }
  }
`;

export const UPDATE_FAMILY_MEMBER = gql`
  mutation UPDATE_FAMILY_MEMBER(
    $data: FamilyMemberUpdateInput!
    $where: FamilyMemberWhereUniqueInput!
  ) {
    updateFamilyMember(where: $where, data: $data) {
      id
      updatedAt
    }
  }
`;
