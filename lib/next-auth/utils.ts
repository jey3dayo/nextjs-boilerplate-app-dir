import { headers } from 'next/headers';
import { NextRequest } from 'next/server';
import { env } from '@/env.mjs';
import { Role, UserId } from '@/types/user';
import { HttpCodes, messages } from '@/constants/api';
import { getUser } from '@/lib//prisma/utils';
import { ApiRequestError } from '@/lib/error';
import { checkAdmin } from '@/lib/next-auth/role';
import { getUserId } from '@/lib/next-auth/session';

const host = env.BASE_URL;

export function getJwt() {
  const headersList = headers();
  const token = headersList.get('authorization') ?? '';
  return token.replace(/^Bearer /, '');
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

// アクセス権チェック
export async function getUserIdAndCheckAccess(req: NextRequest): Promise<UserId> {
  checkVulnerabilities();

  const userId = await getUserId(req);
  if (!userId) throw new ApiRequestError(messages.needLogin, HttpCodes.Unauthorized);

  return userId;
}

export async function getUserAndCheckUser(userId: UserId) {
  const user = await getUser(userId);
  if (!user) throw new ApiRequestError(messages.userNotFound, HttpCodes.Unauthorized);

  return user;
}

export function checkAdminAccess(role: Role) {
  if (!checkAdmin(role)) {
    throw new ApiRequestError(messages.needAdminRole, HttpCodes.Forbidden);
  }
}
