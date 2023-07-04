import { headers } from 'next/headers';
import { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { env } from '@/env.mjs';
import { UserId } from '@/types/next-auth';
import { HttpCodes, messages } from '@/constants/api';
import { ApiRequestError } from '@/lib/error';
import { checkAdmin } from '@/lib/next-auth/role';
import { getCurrentUser } from '@/lib/next-auth/session';
// import { prismaClient } from '@/lib/prisma';
import { getOptions, verifyJwt } from '@/lib/token';

const host = env.BASE_URL;

export function getJwt() {
  const headersList = headers();
  const token = headersList.get('authorization') ?? '';
  return token.replace(/^Bearer /, '');
}

// TODO: profileのマージを検討
export async function getPayload(req: NextRequest) {
  const token = await getToken({ req, raw: true });
  const options = getOptions(env.NEXTAUTH_SECRET, env.NEXT_PUBLIC_APP_NAME);
  return verifyJwt(token, options);
}

// ヘッダーのチェック
export function checkVulnerabilities() {
  const headersList = headers();
  const requestHost = headersList.get('host') ?? '';

  // hostが変更されていたら実行させない
  if (![host, 'localhost'].includes(requestHost)) {
    throw new ApiRequestError(messages.invalidAccess, HttpCodes.BadRequest);
  }
}

export async function checkAdminAccess() {
  const user = await getCurrentUser();
  if (!checkAdmin(user?.role)) {
    throw new ApiRequestError(messages.needAdminRole, HttpCodes.Unauthorized);
  }
}

// アクセス権チェック
export async function getUserIdAndCheckAccess(req: NextRequest): Promise<UserId> {
  checkVulnerabilities();

  // アクセス権チェック
  const session = await getCurrentUser();
  if (session) return session.id as UserId;

  const payload = await getPayload(req);
  if (payload) return payload.id as UserId;

  // user, payloadどっちもなければthrowを返す
  throw new ApiRequestError(messages.needLogin, HttpCodes.Unauthorized);
}

// TODO:
export async function restrictAdminAccess(req: NextRequest): Promise<ApiRequestError | undefined> {}
