import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation LOGIN(
    $username: String!,
    $password: String!
  ) {
    login(
      credentials: {
        username: $username,
        password: $password
      }
    ) {
      roles
      username
      accessToken
    }
  }
`;

export const CREATE_APPLICANT_AND_PERSONAL_INFO = gql`
  mutation CREATE_APPLICANT_AND_PERSONAL_INFO (
    $ApplicantCreateInput: ApplicantCreateInput!
    $PersonalInfoCreateInput: PersonalInfoCreateInput!
  ) {
    createApplicant(
      data: $ApplicantCreateInput
    ) {
      id
      createdAt
    }
    
    createPersonalInfo (
      data: $PersonalInfoCreateInput
    ) {
      id
      createdAt
    }
  }
`;

export const CREATE_PERSONAL_INFO = gql`
  mutation CREATE_PERSONAL_INFO(
    $data: PersonalInfoCreateInput!
  ) {
    createPersonalInfo(data: $data) {
      id
    }
  }
`;

export const CREATE_APPLICANT = gql`
  mutation CREATE_APPLICANT(
    $data: ApplicantCreateInput!
  ) {
    createApplicant(data: $data) {
      id
    }
  }
`;

export const UPDATE_PERSONAL_INFO = gql`
  mutation UPDATE_PERSONAL_INFO(
    $where: PersonalInfoWhereUniqueInput!
    $data: PersonalInfoUpdateInput!
  ) {
    updatePersonalInfo(
      where: $where,
      data: $data
    ) {
      updatedAt
    }
  }
`;

export const CREATE_EDUCATION_HISTORY = gql`
  mutation CREATE_EDUCATION_HISTORY(
    $data: EducationHistoryCreateInput!
  ) {
    createEducationHistory(data: $data) {
      id
      createdAt
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

export const UPDATE_EDUCATION_HISTORY = gql`
  mutation UPDATE_EDUCATION_HISTORY(
    $where: EducationHistoryWhereUniqueInput!
    $data: EducationHistoryUpdateInput!
  ) {
    updateEducationHistory(
      where: $where,
      data: $data
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
  mutation CREATE_EMPLOYMENT_HISOTRY(
    $data: EmploymentHistoryCreateInput!
  ) {
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
    updateEmploymentHistory(
      where: $where,
      data: $data
    ) {
      id
      updatedAt
    }
  }
`;

export const CREATE_TRAVEL_HISTORY = gql`
  mutation CREATE_TRAVEL_HISTORY(
    $data: TravelHistoryCreateInput!
  ) {
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
    updateTravelHistory(
      where: $where,
      data: $data
    ) {
      id
      updatedAt
    }
  }
`;

export const CREATE_FAMILY_MEMBER = gql`
  mutation CREATE_FAMILY_MEMBER(
    $data: FamilyMemberCreateInput!
  ) {
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
    updateFamilyMember(
      where: $where,
      data: $data
    ) {
      id
      updatedAt
    }
  }
`;
