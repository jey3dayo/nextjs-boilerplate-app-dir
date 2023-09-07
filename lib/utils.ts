import { env } from '@/env.mjs';

export const isProduction = process.env.NODE_ENV === 'production';

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_BASE_URL}${path}`;
}
