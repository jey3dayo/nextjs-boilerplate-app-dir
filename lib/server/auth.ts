import { headers } from 'next/headers';
import { env } from '@/env.mjs';
import { HttpCodes, messages } from '@/constants/api';
import { ApiRequestError } from '@/lib/error';

const host = env.BASE_URL;

// hostが変更されていたら実行させない
export function checkHeaders() {
  const headersList = headers();
  const requestHost = headersList.get('host') ?? '';

  if (![host, 'localhost'].includes(requestHost)) {
    return new ApiRequestError(messages.invalidAccess, HttpCodes.Forbidden);
  }
}
