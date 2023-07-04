import { NextRequest } from 'next/server';
import { env } from '@/env.mjs';

const baseUrl = env?.BASE_URL ?? '';
const host = /http/.test(baseUrl) ? new URL(baseUrl).href : baseUrl;
const allowOriginHost = /localhost:/.test(host) ? '*' : `${host}`;

// api用のheaders
export const headers: HeadersInit = {
  'Access-Control-Allow-Origin': allowOriginHost,
  'Access-Control-Allow-Headers': 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, authorization',
  'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Credentials': 'true',
  'X-XSS-Protection': '1; mode=block',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'Deny',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  host: host,
  'Cache-control': 'no-store',
  Pragma: 'no-cache',
};
type Header = typeof headers;

// middleware用
export function getRequestHeaders(req: NextRequest) {
  const requestHeaders = new Headers(req.headers);

  const headersRecord = headers as Record<string, string>;
  Object.keys(headersRecord).forEach((key: keyof Header) => {
    requestHeaders.append(key, headersRecord[key]);
  });

  return requestHeaders;
}
