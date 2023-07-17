import { baseUrl } from '@/constants/api';
import { messages } from '@/constants/messages';
import { getAllCookies } from '@/lib/api-utils';
import { ApiRequestError } from '@/lib/error';

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

    if (!res.ok) {
      const json = await res.json();

      if (json.error) {
        const error = new ApiRequestError(json.error, res.status);
        throw error;
      } else {
        throw new Error(messages.internalServerError);
      }
    }

    return res.json();
  } catch (e) {
    throw e;
  }
}
