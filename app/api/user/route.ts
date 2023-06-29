import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/next-auth/session';
import { createResponseWithError } from '@/lib/server/api-utils';
import { checkHeaders } from '@/lib/server/auth';

export async function GET(_req: NextApiRequest, _res: NextApiResponse) {
  const headerCheck = checkHeaders();
  if (headerCheck) return createResponseWithError(headerCheck);

  // TODO: トークンチェック

  const user = await getCurrentUser();
  if (!user) NextResponse.json({ error: 'User session not found.' });

  return NextResponse.json({
    id: user?.id,
    name: user?.name,
    email: user?.email,
    image: user?.image,
  });
}
