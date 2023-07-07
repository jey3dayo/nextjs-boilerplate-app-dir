'server-only';

import { headers } from 'next/headers';
import { NextRequest } from 'next/server';
import { Role, UserId } from '@/types/user';
import { baseUrlHost, headersRecord, HttpCodes, messages } from '@/constants/api';
import { ApiRequestError } from '@/lib/error';
import { checkAdmin } from '@/lib/next-auth/role';
import { getUser } from '@/lib/prisma/utils';
import { getUserId } from './next-auth/session';

export const responseInit: ResponseInit = { headers: headersRecord };

export function createResponseWithError(error: Error | ApiRequestError) {
  if ('status' in error) responseInit.status = error.status;
  return new Response(error.message, responseInit);
}

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
  if (!/localhost/.test(requestHost) && baseUrlHost !== requestHost) {
    throw new ApiRequestError(messages.invalidAccess, HttpCodes.BadRequest);
  }
}

export async function getUserIdOrThrow(req: NextRequest): Promise<UserId | undefined> {
  const userId = getUserId(req);
  if (!userId) throw new ApiRequestError(messages.needLogin, HttpCodes.Unauthorized);

  return userId;
}

export async function getUserOrThrow(userId: UserId) {
  const user = await getUser(userId);
  if (!user) throw new ApiRequestError(messages.userNotFound, HttpCodes.Unauthorized);

  return user;
}

export function checkAdminAccess(role: Role | undefined) {
  if (!checkAdmin(role)) {
    throw new ApiRequestError(messages.needAdminRole, HttpCodes.Forbidden);
  }
}

export async function getUserAndValidate(req: NextRequest) {
  checkVulnerabilities();
  const userId = await getUserIdOrThrow(req);
  if (!userId) return null;

  const user = await getUserOrThrow(userId);
  return user;
}
