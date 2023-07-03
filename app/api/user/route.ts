import { NextRequest, NextResponse } from 'next/server';
import { createResponseWithError } from '@/lib/api-utils';
import { getUserId, restrictAccess } from '@/lib/auth';
import { prismaClient } from '@/lib/prisma';
import { headers } from '@/lib/request-headers';

export async function GET(req: NextRequest) {
  const responseInit = { headers };
  const accessError = await restrictAccess(req);
  if (accessError) return createResponseWithError(accessError);

  const userId = await getUserId(req);
  if (!userId) return NextResponse.json({ error: 'User session not found.' }, responseInit);

  const user = await prismaClient.user.findUnique({ where: { id: userId } });
  if (user) {
    return NextResponse.json(
      {
        id: user?.id,
        name: user?.name,
        email: user?.email,
        image: user?.image,
        role: user?.roleId,
      },
      responseInit,
    );
  }

  return NextResponse.json({ error: 'User session not found.' }, responseInit);
}
