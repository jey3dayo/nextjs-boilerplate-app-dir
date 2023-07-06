import { ApiRequestError } from '@/lib/error';
import { headers } from '@/lib/request-headers';

export const responseInit: ResponseInit = { headers: headersRecord };
export const requestInit = { request: responseInit };

export function getHeaders(req: NextRequest) {
  const headers = new Headers(req.headers);

  const headersClone = headersRecord;
  Object.keys(headersClone).forEach((key: keyof Header) => {
    headers.append(key, headersClone[key]);
  });

  return headers;
}
