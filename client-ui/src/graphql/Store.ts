import { makeVar, InMemoryCache, ReactiveVar } from '@apollo/client';
import {
  Applicant,
  EducationHistory,
  EmploymentHistory,
  FamilyMember,
  PersonalInfo,
  TravelHistory,
  User,
  UserInfo,
} from '../generated/graphql';

const educationHistory: EducationHistory = {
  id: '',
};

const employmentHistory: EmploymentHistory = {
  id: '',
};

const travelHistory: TravelHistory = {
  id: '',
};

const familyMember: FamilyMember = {
  id: '',
  applicants: [],
};

const personalInfo: PersonalInfo = {
  id: '',
};

const applicant: Applicant = {
  id: '',
  educationHistories: [educationHistory],
  employmentHistories: [employmentHistory],
  travelHistories: [travelHistory],
  familyMembers: [familyMember],
};

export const userInfo: ReactiveVar<UserInfo> = makeVar<UserInfo>({
  __typename: 'UserInfo',
  username: '',
  accessToken: '',
  roles: ['user'],
});

export const user: ReactiveVar<User> = makeVar<User>({
  id: '',
  roles: ['User'],
  username: '',
  firstName: '',
  lastName: '',
  applicants: [applicant],
  applicantsCreated: [applicant],
  applicantsArchived: [applicant],
  applicantsUpdated: [applicant],
  educationHistoriesArchived: [educationHistory],
  educationHistoriesCreated: [educationHistory],
  educationHistoriesUpdated: [educationHistory],
  employmentHistoriesArchived: [employmentHistory],
  employmentHistoriesCreated: [employmentHistory],
  employmentHistoriesUpdated: [employmentHistory],
  familyMembersArchived: [familyMember],
  familyMembersCreated: [familyMember],
  familyMembersUpdated: [familyMember],
  personalInfosArchived: [personalInfo],
  personalInfosCreated: [personalInfo],
  personalInfosUpdated: [personalInfo],
  travelHistoriesArchived: [travelHistory],
  travelHistoriesCreated: [travelHistory],
  travelHistoriesUpdated: [travelHistory],
});

export const entityCreated: ReactiveVar<string> = makeVar('');
export const applicantIdCurrEditing: ReactiveVar<string> = makeVar('');

export const Store = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        userInfo: {
          read() {
            return userInfo();
          },
        },
        user: {
          read() {
            return user();
          },
        },
        entityCreated: {
          read() {
            return entityCreated();
          },
        },
        applicantIdCurrEditing: {
          read() {
            return applicantIdCurrEditing();
          },
        },
      },
    },
  },
});
