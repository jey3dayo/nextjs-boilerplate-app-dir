import { NextAuthOptions } from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';
import GithubProvider from 'next-auth/providers/github';
import { env } from '@/env.mjs';
import { CassoProvider } from '@/lib/next-auth/casso-provider';

let providers: NextAuthOptions['providers'] = [];

// api/auth/callback/casso
const cassoProvider = CassoProvider({
  clientId: env?.CASSO_CLIENT_ID as string,
  clientSecret: env?.CASSO_CLIENT_SECRET as string,
});
if (env?.CASSO_CLIENT_ID) providers.push(cassoProvider);

// api/auth/callback/github
const githubProvider = GithubProvider({
  clientId: env.GITHUB_ID as string,
  clientSecret: env.GITHUB_SECRET as string,
});
if (env?.GITHUB_ID) providers.push(githubProvider);

// api/auth/callback/auth0
const auth0Provier = Auth0Provider({
  clientId: env.AUTH0_CLIENT_ID as string,
  clientSecret: env.AUTH0_CLIENT_SECRET as string,
  issuer: process.env.AUTH0_ISSUER as string,
});
if (env?.AUTH0_CLIENT_ID) providers.push(auth0Provier);

export { providers };
