import { NextApiRequest } from 'next';
import { ApiRequestError } from '@/lib/error';

export function createResponseWithError(error: ApiRequestError) {
  return new Response(error.message, { status: error.status });
}
