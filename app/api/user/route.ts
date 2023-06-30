import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { createResponseWithError } from '@/lib/api-utils';
import { getPayload, restrictAccess } from '@/lib/auth';
import { getCurrentUser } from '@/lib/next-auth/session';

export async function GET(req: NextApiRequest, _res: NextApiResponse) {
  const accessError = await restrictAccess(req);
  if (accessError) return createResponseWithError(accessError);

  const user = await getCurrentUser();
  if (user) {
    return NextResponse.json({
      id: user?.id,
      name: user?.name,
      email: user?.email,
      image: user?.image,
    });
  }

  const payload = await getPayload(req);
  if (payload) {
    return NextResponse.json({
      id: payload?.id,
      iat: payload?.iat,
      exp: payload?.exp,
    });
  }

  return NextResponse.json({ error: 'User session not found.' });
}
