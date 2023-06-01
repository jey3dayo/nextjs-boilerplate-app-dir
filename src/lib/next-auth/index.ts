import 'server-only';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import type { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { OAuthConfig } from 'next-auth/providers/oauth';
import { env } from '@/env.mjs';
import CassoProvider from '@/lib/next-auth/casso-provider';
import { prismaClient } from '@/lib/prisma';
import { isProduction } from '@/lib/utils';

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

let providers: OAuthConfig<any>[] = [githubProvider];
if (env?.CASSO_CLIENT_ID) providers.push(cassoProvider);

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prismaClient),
  session: { strategy: 'jwt' },
  providers,
  useSecureCookies: isProduction,
  callbacks: {
    // async redirect({ baseUrl }: { baseUrl: string }): Promise<string> {
    //   return baseUrl;
    // },
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
      } else {
        console.log('nothing token!!!!!!!!!!!');
      }

      return session;
    },
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
  },
};
