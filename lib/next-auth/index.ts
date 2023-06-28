import { PrismaAdapter } from '@next-auth/prisma-adapter';
import type { NextAuthOptions } from 'next-auth';
import { providers } from '@/lib/next-auth/provider';
import { prismaClient } from '@/lib/prisma';

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
