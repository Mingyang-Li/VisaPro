import { makeVar, InMemoryCache, ReactiveVar } from '@apollo/client';

export const jwtTokenVar: ReactiveVar<string> = makeVar('');

export const Store = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        jwtToken: {
          read() {
            return jwtTokenVar();
          },
        },
      },
    },
  },
});
