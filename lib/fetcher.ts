import { baseUrl } from '@/constants/api';

export const forge = (url: string) => (/^http/.test(url) ? url : `${baseUrl}${url}`);

export async function fetcher(url: string, init?: RequestInit) {
  return fetch(forge(url), init).then((res) => res.json() as Promise<any | null>);
}
