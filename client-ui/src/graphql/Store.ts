import { makeVar, InMemoryCache, ReactiveVar } from '@apollo/client';
import {
  Applicant,
  EducationHistory,
  EmploymentHistory,
  FamilyMember,
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
  __typename: 'User',
  applicants: [{}],
  applicantsArchived: [],
});

export const Store = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        userInfo: {
          read() {
            return userInfo();
          },
        },
      },
    },
  },
});
