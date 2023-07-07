import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const env = createEnv({
  server: {
    // Not needed on VERCEL
    VERCEL_URL: z.string().url().optional(),
    NEXTAUTH_URL: z.string().url().optional(),
    DATABASE_URL: z.string().min(1),

    NEXTAUTH_SECRET: z.string().min(1),
    GITHUB_ID: z.string().min(1),
    GITHUB_SECRET: z.string().min(1),
    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),
    AUTH0_CLIENT_ID: z.string().min(1),
    AUTH0_CLIENT_SECRET: z.string().min(1),
    AUTH0_ISSUER: z.string().url(),
    CASSO_CLIENT_ID: z.string().min(1).optional(),
    CASSO_CLIENT_SECRET: z.string().min(1).optional(),
    CASSO_REDIRECT_URI: z.string().url().optional(),
  },
  client: {
    NEXT_PUBLIC_BASE_URL: z.string().min(1).optional(),
    NEXT_PUBLIC_APP_NAME: z.string().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_APP_NAME: process.env?.NEXT_PUBLIC_APP_NAME,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    AUTH0_ISSUER: process.env.AUTH0_ISSUER,
    CASSO_CLIENT_ID: process.env.CASSO_CLIENT_ID,
    CASSO_CLIENT_SECRET: process.env.CASSO_CLIENT_SECRET,
    CASSO_REDIRECT_URI: process.env.CASSO_REDIRECT_URI,
  },
});

export { env };
