'server-only';

import { NextRequest } from 'next/server';
import { Session } from 'next-auth';
import { getToken } from 'next-auth/jwt';
import { getServerSession as _getServerSession } from 'next-auth/next';
import { env } from '@/env.mjs';
import { UserId } from '@/types/user';
import { authOptions } from '@/lib/next-auth';
import { getOptions, verifyJwt } from '@/lib/token';

export function getServerSession() {
  return _getServerSession(authOptions);
}

export async function getCurrentUser(): Promise<Session['user'] | undefined> {
  const session = await getServerSession();
  return session?.user;
}

export async function getPayload(req: NextRequest) {
  const token = await getToken({ req, raw: true });
  const options = getOptions(env.NEXTAUTH_SECRET, env.NEXT_PUBLIC_APP_NAME);
  return verifyJwt(token, options);
}

export async function getUserId(req: NextRequest): Promise<UserId | undefined> {
  const session = await getCurrentUser();
  if (session) return session.id as UserId;

  const payload = await getPayload(req);
  if (payload) return payload.id as UserId;

  return undefined;
}
