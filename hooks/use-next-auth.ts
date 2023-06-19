import { useSession } from 'next-auth/react';

export function useCurrentUser() {
  const { data, status } = useSession();
  return {
    user: data?.user,
    data: data,
    status,
  };
}
