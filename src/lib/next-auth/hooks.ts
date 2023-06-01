import { useSession } from 'next-auth/react';

export function useCurrentUser() {
  const { data } = useSession();
  return data?.user;
}
