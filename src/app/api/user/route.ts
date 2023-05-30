import { NextResponse } from 'next/server';
import { getServerSession } from '@/lib/next-auth/server-utils';

export async function GET(_req: Request, _res: Response) {
  const session = await getServerSession();
  const user = session?.user;

  if (!user) NextResponse.json({ error: 'User session not found.' });

  return NextResponse.json({
    id: user?.id,
    name: user?.name,
    email: user?.email,
    image: user?.image,
  });
}
