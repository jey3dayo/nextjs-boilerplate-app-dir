import { Provider } from 'next-auth/providers';
import GithubProvider from 'next-auth/providers/github';
import { env } from '@/env.mjs';
import CassoProvider from '@/lib/next-auth/casso-provider';

// api/auth/callback/casso
const cassoProvider = CassoProvider({
  clientId: env?.CASSO_CLIENT_ID as string,
  clientSecret: env?.CASSO_CLIENT_SECRET as string,
});

// api/auth/callback/github
const githubProvider = GithubProvider({
  clientId: env.GITHUB_ID as string,
  clientSecret: env.GITHUB_SECRET as string,
});

let providers: Provider[] = [githubProvider];
if (env?.CASSO_CLIENT_ID) providers.push(cassoProvider);

export const authOptions = {
  providers,
};
