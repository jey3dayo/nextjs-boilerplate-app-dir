import { NextRequest, NextResponse } from 'next/server';
import { createResponseWithError, getUserAndValidate, responseInit } from '@/lib/api-utils';
import { ApiRequestError } from '@/lib/error';

export async function GET(req: NextRequest) {
  try {
    const user = await getUserAndValidate(req);

    return NextResponse.json(
      {
        id: user?.id,
        name: user?.name,
        email: user?.email,
        image: user?.image,
        role: user?.role?.name,
      },
      responseInit,
    );
  } catch (error: unknown) {
    return createResponseWithError(error instanceof Error ? error : new ApiRequestError('unknown error'));
  }
}
