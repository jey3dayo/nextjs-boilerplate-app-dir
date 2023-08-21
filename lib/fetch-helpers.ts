import { Role, User } from '@/types/user';
import { fetcher } from '@/lib/fetcher';

async function getUsers() {
  const res = (await fetcher('/api/users')) as User[];
  return res;
}

async function getRoles() {
  const res = (await fetcher('/api/roles', { cache: 'force-cache' })) as Role[];
  return res;
}

export { getUsers, getRoles };
