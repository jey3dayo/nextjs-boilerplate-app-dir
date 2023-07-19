import { NextRequest, NextResponse } from 'next/server';
import { messages } from '@/constants/messages';
import { checkAdminAccess, createResponseWithError, getUserAndValidate, responseInit } from '@/lib/api-utils';
import { ApiRequestError } from '@/lib/error';
import { getRoles } from '@/lib/prisma/utils';

export async function GET(req: NextRequest) {
  try {
    const user = await getUserAndValidate(req);
    if (!user) throw new ApiRequestError(messages.userNotFound);
    checkAdminAccess(user?.role?.name);

    const values = await getRoles();

    return NextResponse.json(values, responseInit);
  } catch (error: unknown) {
    const err = error instanceof Error ? error : new ApiRequestError(messages.unknownError);
    return createResponseWithError(err);
  }
}
