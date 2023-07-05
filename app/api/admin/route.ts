import { NextRequest, NextResponse } from 'next/server';
import { createResponseWithError } from '@/lib/api-utils';
import { ApiRequestError } from '@/lib/error';
import { checkAdminAccess, getUserAndCheckUser, getUserIdAndCheckAccess } from '@/lib/next-auth/utils';
import { headers } from '@/lib/request-headers';

export async function GET(req: NextRequest) {
  const responseInit = { headers };

  try {
    const userId = await getUserIdAndCheckAccess(req);
    const user = await getUserAndCheckUser(userId);
    checkAdminAccess(user.role.name);

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
