import * as z from 'zod';

export const userNameSchema = z.object({
  name: z.string().optional(),
  roleId: z.number().optional(),
  isSuspended: z.boolean().optional(),
  email: z.string().optional(),
  image: z.string().url().optional(),
});
