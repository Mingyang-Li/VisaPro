import { object, string } from 'zod';

export const loginSchema = object({
  email: string().min(1, { message: 'Email is required' }),
  password: string().min(1, { message: 'Password is required' }),
});
