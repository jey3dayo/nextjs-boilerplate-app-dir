import { fetcher } from '@/lib/fetcher';

async function getUsers() {
  const res = await fetcher('/api/users');
  return res;
}

async function getRoles() {
  const res = await fetcher('/api/roles', { cache: 'force-cache' });
  return res;
}

export { getUsers, getRoles };
