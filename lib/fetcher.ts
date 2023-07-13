import { baseUrl } from '@/constants/api';

export const forge = (url: string) => (/^http/.test(url) ? url : `${baseUrl}${url}`);

export async function smartFetch(url: string, init?: RequestInit) {
  return fetch(forge(url), init);
}

export async function fetcher(url: string, init?: RequestInit) {
  return smartFetch(url, init).then((res) => res.json());
}
