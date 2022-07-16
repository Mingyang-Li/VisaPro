import { object, string } from 'zod';

export const loginSchema = object({
  email: string().min(1, { message: 'Email is required' }),
  password: string().min(1, { message: 'Password is required' }),
});

export const SPersonalInfo = object({
  firstName: string().min(1, { message: 'First name is required' }),
  lastName: string().min(1, { message: 'Last name is required' }),
  email: string().email().min(1, { message: 'Email is required' }),
});
