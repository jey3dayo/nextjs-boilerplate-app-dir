import { NextAuthOptions, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import { prismaClient } from '@/lib/prisma';

const callbacks: NextAuthOptions['callbacks'] = {
  async jwt({ token, user }) {
    // jwt.emailでUserを特定する
    if (!token?.email) return token;

    const dbUser = await prismaClient.user.findUnique({
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        role: { select: { name: true } },
      },
      where: { email: token.email },
    });

    if (!dbUser) {
      if (user) token.id = user?.id;
      return token;
    }

    return {
      id: dbUser.id,
      name: dbUser.name,
      email: dbUser.email,
      picture: dbUser.image,
      role: dbUser.role.name,
    } as Session['user'] as JWT;
  },
  session({ session, token }) {
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
        } as Session['user'];
      }
    }

    return session;
  },
};

export { callbacks };
