import { makeVar, InMemoryCache, ReactiveVar } from '@apollo/client';
import { UserInfo } from '../generated/graphql';

export const userInfo: ReactiveVar<UserInfo> = makeVar<UserInfo>({
  __typename: 'UserInfo',
  username: '',
  accessToken: '',
  roles: ['user'],
});

// export const user: ReactiveVar<User> = makeVar<User>({
//   __typename: 'User',
//   applicants: [{}],
//   applicantsArchived: [],
// });

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
