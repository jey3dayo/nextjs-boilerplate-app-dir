import getConfig from 'next/config';

const baseUrl = getConfig()?.publicRuntimeConfig?.baseUrl ?? process.env.NEXT_PUBLIC_BASE_URL;

export const forge = (url: string) => (/^http/.test(url) ? url : `${baseUrl}${url}`);

export async function fetcher(url: string, init?: RequestInit) {
  return fetch(forge(url), init).then(res => res.json() as Promise<any | null>);
}
