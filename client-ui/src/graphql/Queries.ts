import { gql } from '@apollo/client';

export const GET_CURR_USER = gql`
  query ($username: String) {
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
  query ($userId: String) {
    applicants(
      where: { createdBy: { id: "asjh" }, archived: { equals: false } }
    ) {
      id
      personalInfo {
        id
        firstName
        lastName
        email
        modile
        countryOfBirth
        countriesOfCitizenship
        inzClientNumber
        nzAddress
        passportNumber
        createdAt
        updatedAt
      }
      educationHistories {
        id
        startDate
        endDate
        isCurrentInstitution
        city
        country
        institutionName
        qualificationGained
        createdAt
        updatedAt
      }
      employmentHistories {
        id
        jobTitle
        companyName
        startDate
        endDate
        isCurrentJob
        duties
        nzBusinessNumber
        additionalInfo
        createdAt
        updatedAt
      }
      familyMembers {
        id
        firstName
        lastName
        dateOfBirth
        countryOfBirth
        countriesOfCitizenship
        relationshipToApplicant
        createdAt
        updatedAt
      }
      travelHistories {
        id
        dateDeparted
        dateEntered
        destinationAirport
        destinationCity
        destinationCountry
        reasonOfTravel
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
