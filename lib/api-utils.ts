import { ApiRequestError } from '@/lib/error';
import { headers } from '@/lib/request-headers';

export function createResponseWithError(error: Error | ApiRequestError) {
  const responseInit: ResponseInit = { headers };
  if ('status' in error) responseInit.status = error.status;
  return new Response(error.message, responseInit);
}
