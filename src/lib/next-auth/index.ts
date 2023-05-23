import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { AuthOptions, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import GithubProvider from 'next-auth/providers/github';
import { OAuthConfig } from 'next-auth/providers/oauth';
import { SessionWithUser } from '@/@types/next-auth';
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

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prismaClient),
  session: { strategy: 'jwt' },
  providers,
  useSecureCookies: isProduction,
  callbacks: {
    // async redirect({ baseUrl }: { baseUrl: string }): Promise<string> {
    //   return baseUrl;
    // },
    async session({ session, token }: { session: SessionWithUser; token: JWT }): Promise<SessionWithUser> {
      if (token) {
        if (session?.user) {
          session.user.id = (token?.id as string) ?? null;
          session.user.name = token?.name ?? null;
          session.user.email = token?.email ?? null;
          session.user.image = token?.picture ?? null;
        } else {
          session.user = {
            id: (token?.id as string) ?? null,
            name: token?.name ?? null,
            email: token?.email ?? null,
            image: token?.picture ?? null,
          };
        }
      }

      return session;
    },
    async jwt({ token, user }: { token: JWT; user: User }): Promise<JWT> {
      // jwt.emailでUserを特定する
      if (!token?.email) return token;

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
