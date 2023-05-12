import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

const { GITHUB_ID, GITHUB_SECRET } = process.env;

const authOptions = {
  providers: [
    GithubProvider({
      clientId: GITHUB_ID as string,
      clientSecret: GITHUB_SECRET as string,
    }),
  ],
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
