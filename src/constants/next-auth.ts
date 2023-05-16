import GithubProvider from 'next-auth/providers/github';

const { GITHUB_ID, GITHUB_SECRET } = process.env;

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: GITHUB_ID as string,
      clientSecret: GITHUB_SECRET as string,
    }),
  ],
};
