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
  mutation (
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
  mutation (
    $institutionName: String
    $city: String
    $country: String
    $isCurrentInstitution: Boolean
    $qualificationGained: String
    $startDate: DateTime
    $endDate: DateTime
    $archived: Boolean
    $additionalInfo: String
    
    # relations
    $applicantID: String!
    $createdByID: String!
  ) {
    createEducationHistory (
      data: {
        institutionName: $institutionName
        city: $city
        country: $country
        isCurrentInstitution: $isCurrentInstitution
        qualificationGained: $qualificationGained
        startDate: $startDate
        endDate: $endDate
        archived: $archived
        additionalInfo: $additionalInfo
        applicant: {
          id: $applicantID
        }
        createdBy: {
          id: $createdByID
        }
      }
    ) {
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
  mutation (
  # pk
  $id: String!
  
  # args
  $institutionName: String
  $city: String
  $country: String
  $isCurrentInstitution: Boolean
  $qualificationGained: String
  $startDate: DateTime
  $endDate: DateTime
  $archived: Boolean
  $additionalInfo: String
  $updatedByID: String!
) {
    updateEducationHistory (
      where: {
        id: $id
      }
      data: {
        institutionName: $institutionName
        city: $city
        country: $country
        isCurrentInstitution: $isCurrentInstitution
        qualificationGained: $qualificationGained
        startDate: $startDate
        endDate: $endDate
        archived: $archived
        additionalInfo: $additionalInfo
        updatedBy: {
          id: $updatedByID
        }
      }
    ) {
      id
      updatedAt
      updatedBy {
        id
        username
      }
    }
  }
`;