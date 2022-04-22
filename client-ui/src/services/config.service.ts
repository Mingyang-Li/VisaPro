import * as dotenv from 'dotenv';

dotenv.config();

export const ConfigService = {
  REACT_APP_GRAPHQL_API: process.env.REACT_APP_GRAPHQL_API,
};
