import { NextRequest, NextResponse } from 'next/server';
import { messages } from '@/constants/api';
import { createResponseWithError } from '@/lib/api-utils';
import { ApiRequestError } from '@/lib/error';
import { getUserIdAndCheckAccess } from '@/lib/next-auth/utils';
import { prismaClient } from '@/lib/prisma';
import { headers } from '@/lib/request-headers';

export async function GET(req: NextRequest) {
  const responseInit = { headers };

  try {
    const userId = await getUserIdAndCheckAccess(req);
    if (!userId) throw new Error(messages.failedSession);

    const user = await prismaClient.user.findUnique({
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        role: { select: { name: true } },
      },
      where: { id: userId },
    });
    if (!user) throw new Error(messages.userNotFound);

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
