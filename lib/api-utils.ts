import { ApiRequestError } from '@/lib/error';
import { headers } from '@/lib/request-headers';

export function createResponseWithError(error: ApiRequestError) {
  return new Response(error.message, { headers, status: error.status });
}
