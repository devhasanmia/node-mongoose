import { z } from 'zod';

const userValidationSchema = z.object({
  id: z.string(),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' })
    .max(20, { message: 'Password must be at most 20 characters long' }),
  needsPasswordChange: z.boolean().optional(),
  role: z.enum(['admin', 'student', 'faculty']),
  status: z.enum(['in-progress', 'blocked']).default('in-progress'),
  isDeleted: z.boolean().default(false),
});

export const UserValidation = {
  userValidationSchema,
};
