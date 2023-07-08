import { env } from '@/env.mjs';
import { messages } from '@/constants/messages';

export enum HttpCodes {
  OK = 200,
  MultipleChoices = 300,
  MovedPermanently = 301,
  ResourceMoved = 302,
  SeeOther = 303,
  NotModified = 304,
  UseProxy = 305,
  SwitchProxy = 306,
  TemporaryRedirect = 307,
  PermanentRedirect = 308,
  BadRequest = 400,
  Unauthorized = 401,
  PaymentRequired = 402,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  NotAcceptable = 406,
  ProxyAuthenticationRequired = 407,
  RequestTimeout = 408,
  Conflict = 409,
  Gone = 410,
  TooManyRequests = 429,
  UnprocessableEntity = 422,
  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
}

export const baseUrl = env?.NEXT_PUBLIC_BASE_URL ?? env?.VERCEL_URL ?? '';
export const baseUrlHost = baseUrl.split(':')[0];
const host = /http/.test(baseUrl) ? new URL(baseUrl).href : baseUrl;

// api用のheaders
const allowOriginHost = /localhost:/.test(host) ? '*' : `${host}`;
export const headersRecord: Record<string, string> = {
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
export type Header = typeof headersRecord;

export type HttpCodeValue = valueof<typeof HttpCodes>;
export type Message = valueof<typeof messages>;

export const errorMessages: Partial<Record<HttpCodeValue, Message>> = {
  [HttpCodes.BadRequest]: messages.invalidAccess,
  [HttpCodes.Forbidden]: messages.forbidden,
  [HttpCodes.NotFound]: messages.pageNotFound,
  [HttpCodes.InternalServerError]: messages.internalServerError,
};
