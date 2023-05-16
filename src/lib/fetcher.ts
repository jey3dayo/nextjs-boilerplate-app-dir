import { env } from '@/env.mjs';

export const forge = (url: string) => (/^http/.test(url) ? url : `${env.BASE_URL}${url}`);

export async function fetcher(url: string, init?: RequestInit) {
  return fetch(forge(url), init).then(res => res.json() as Promise<any | null>);
}
