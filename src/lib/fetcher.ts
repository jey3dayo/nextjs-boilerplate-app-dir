import { baseUrl } from '@/constants';

export const forge = (url: string) => (/^http/.test(url) ? url : `${baseUrl}${url}`);

export async function fetcher(url: string, init?: RequestInit) {
  return fetch(forge(url), init)
    .then(res => res.json() as Promise<any | null>)
    .catch(err => {
      console.error(err);
    });
}
