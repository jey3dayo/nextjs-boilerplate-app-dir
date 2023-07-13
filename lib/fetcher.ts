import { baseUrl } from '@/constants/api';
import { getAllCookies } from '@/lib/api-utils';

export const forge = (url: string) => (/^http/.test(url) ? url : `${baseUrl}${url}`);

export async function smartFetch(url: string, init?: RequestInit) {
  return fetch(forge(url), init);
}

export async function fetcher(url: string, init?: RequestInit) {
  try {
    const cookie = getAllCookies();
    const options = {
      headers: {
        cookie,
      },
      cache: 'no-store',
      ...init,
    } as RequestInit;
    const res = await smartFetch(url, options);
    if (res.ok) {
      return res.json();
    }
  } catch (e) {
    throw e;
  }
}
