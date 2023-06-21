import 'server-only';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import type { NextAuthOptions } from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';
import GithubProvider from 'next-auth/providers/github';
import { OAuthConfig } from 'next-auth/providers/oauth';
import { env } from '@/env.mjs';
import { CassoProvider } from '@/lib/next-auth/casso-provider';
import { prismaClient } from '@/lib/prisma';

let providers: OAuthConfig<any>[] = [];

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

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prismaClient),
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 30, // 30days
  },
  providers,
  callbacks: {
    async jwt({ token, user }) {
      // jwt.emailでUserを特定する
      if (!token?.email) {
        return token;
      }

      const dbUser: any = await prismaClient.user.findFirst({
        where: { email: token.email },
      });

      if (!dbUser) {
        if (user) {
          token.id = user?.id;
        }
        return token;
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
        role: dbUser.roleId,
      };
    },
    async session({ session, token }) {
      if (token) {
        if (session?.user) {
          session.user.id = token.id;
          session.user.name = token.name;
          session.user.email = token.email;
          session.user.image = token.picture;
          session.user.role = token.role;
        } else {
          session.user = {
            id: token.id,
            name: token.name,
            email: token.email,
            image: token.picture,
            role: token.role,
          };
        }
      }

      return session;
    },
  },
};
