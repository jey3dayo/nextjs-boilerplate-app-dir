import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    BASE_URL: z.string().url().optional(),
    VERCEL_URL: z.string().url().optional(),
    GITHUB_ID: z.string().min(1),
    GITHUB_SECRET: z.string().min(1),
    NEXTAUTH_URL: z.string().url().optional(),
    NEXTAUTH_SECRET: z.string().min(1),
    DATABASE_URL: z.string().min(1),
    CASSO_CLIENT_ID: z.string().min(1).optional(),
    CASSO_CLIENT_SECRET: z.string().min(1).optional(),
    CASSO_REDIRECT_URI: z.string().url().optional(),
  },
  client: {
    NEXT_PUBLIC_APP_NAME: z.string().min(1),
  },
  runtimeEnv: {
    BASE_URL: process.env.BASE_URL,
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXT_PUBLIC_APP_NAME: process.env?.NEXT_PUBLIC_APP_NAME,
    DATABASE_URL: process.env.DATABASE_URL,
    CASSO_CLIENT_ID: process.env.CASSO_CLIENT_ID,
    CASSO_CLIENT_SECRET: process.env.CASSO_CLIENT_SECRET,
    CASSO_REDIRECT_URI: process.env.CASSO_REDIRECT_URI,
  },
});
