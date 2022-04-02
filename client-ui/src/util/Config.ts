import dotenv from 'dotenv';
dotenv.config();

export const Config = {
  PORT: process.env.PORT,
  REACT_APP_API: process.env.REACT_APP_API,
}
