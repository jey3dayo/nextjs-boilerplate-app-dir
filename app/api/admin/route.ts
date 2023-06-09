import { NextRequest, NextResponse } from 'next/server';
import { messages } from '@/constants/messages';
import { checkAdminAccess, createResponseWithError, getUserAndValidate, responseInit } from '@/lib/api-utils';
import { ApiRequestError } from '@/lib/error';

export async function GET(req: NextRequest) {
  try {
    const user = await getUserAndValidate(req);
    checkAdminAccess(user?.role?.name);

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
    if (error instanceof Error) {
      return createResponseWithError(error);
    }

    return createResponseWithError(new ApiRequestError(messages.unknownError));
  }
}
