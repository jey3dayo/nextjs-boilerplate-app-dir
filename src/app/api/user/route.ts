import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/next-auth/session';

export async function GET(_req: Request, _res: Response) {
  const user = await getCurrentUser();
  if (!user) NextResponse.json({ error: 'User session not found.' });

  return NextResponse.json({
    id: user?.id,
    name: user?.name,
    email: user?.email,
    image: user?.image,
  });
}
