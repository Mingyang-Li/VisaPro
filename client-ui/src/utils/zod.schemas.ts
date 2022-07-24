import { date, object, string } from 'zod';

export const loginSchema = object({
  email: string().min(1, { message: 'Email is required' }),
  password: string().min(1, { message: 'Password is required' }),
});

export const PersonalInfoSchema = object({
  firstName: string().min(1, { message: 'First name is required' }),
  lastName: string().min(1, { message: 'Last name is required' }),
  email: string()
    .email({ message: 'Please enter a valid email' })
    .min(1, { message: 'Email is required' }),
  mobile: string().min(3, {
    message: 'Mobile numbers must have at least 3 digits',
  }),
  nzAddress: string(),
  homeCountryAddress: string(),
  inzClientNumber: string(),
  passportNumber: string().min(1, { message: 'Passport number is required' }),
  countriesOfCitizenship: string().min(1, {
    message: 'Please select a country of citizenship',
  }),
  countryOfBirth: string().min(1, { message: 'Country of birth is required' }),
  dateOfBirth: date(),
});
