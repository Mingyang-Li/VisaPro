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
    $additionalInfo: String
    
    # relations
    $applicant: ApplicantWhereUniqueInput!
    $createdBy: UserWhereUniqueInput!
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
        archived: false
        additionalInfo: $additionalInfo
        applicant: $applicant
        createdBy: $createdBy
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
    $archivedBy: UserWhereUniqueInput
    $additionalInfo: String
    $updatedBy: UserWhereUniqueInput!
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
        archivedBy: $archivedBy
        additionalInfo: $additionalInfo
        updatedBy: $updatedBy
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

export const CREATE_EMPLOYMENT_HISOTRY = gql`
  mutation (
    # data
    $jobTitle: String
    $companyName: String
    $duties: String
    $cityOfWork: String
    $countryOfWork: String
    $employmentType: String
    $startDate: DateTime
    $endDate: DateTime
    $nzBusinessNumber: String
    $additionalInfo: String

    # relations
    $applicant: ApplicantWhereUniqueInput!
    $createdBy: UserWhereUniqueInput!
  ) {
    createEmploymentHistory (
      data: {
        jobTitle: $jobTitle
        companyName: $companyName
        duties: $duties
        cityOfWork: $cityOfWork
        countryOfWork: $countryOfWork
        employmentType: $employmentType
        startDate: $startDate
        endDate: $endDate
        nzBusinessNumber: $nzBusinessNumber 
        additionalInfo: $additionalInfo
        archived: false
        applicant: $applicant
        createdBy: $createdBy
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
