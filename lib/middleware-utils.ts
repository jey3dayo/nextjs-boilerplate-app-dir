import { NextRequest } from 'next/server';
import { Header, headersRecord } from '@/constants/api';

// middlewareでimportするとclientでimportできない
export function getHeaders(req: NextRequest) {
  const headers = new Headers(req.headers);

  Object.keys(headersRecord).forEach((key: keyof Header) => {
    headers.append(key, headersRecord[key]);
  });

  return headers;
}
