import { NextApiRequest } from 'next';
import { headers } from 'next/headers';
import { getToken } from 'next-auth/jwt';
import { env } from '@/env.mjs';
import { HttpCodes, messages } from '@/constants/api';
import { ApiRequestError } from '@/lib/error';
import { getCurrentUser } from '@/lib/next-auth/session';
import { verifyJwt } from '@/lib/token';

const host = env.BASE_URL;

export function getJwt() {
  const headersList = headers();
  const token = headersList.get('authorization') ?? '';
  return token.replace(/^Bearer /, '');
}

// TODO: profileのマージを検討
export async function getPayload(req: NextApiRequest) {
  const jwt = await getToken({ req });
  return verifyJwt(jwt);
}

// ヘッダーのチェック
export function checkVulnerabilities() {
  const headersList = headers();
  const requestHost = headersList.get('host') ?? '';

  // hostが変更されていたら実行させない
  if (![host, 'localhost'].includes(requestHost)) {
    return new ApiRequestError(messages.invalidAccess, HttpCodes.BadRequest);
  }
}

// ユーザーによるアクセス制限
export async function restrictUserAccess() {
  const user = await getCurrentUser();
  if (!user) {
    return new ApiRequestError(messages.needLogin, HttpCodes.Unauthorized);
  }
}

// トークンによるアクセス制限
export async function restrictTokenAccess(req: NextApiRequest) {
  const payload = await getPayload(req);
  if (!payload) {
    return new ApiRequestError(messages.invalidToken, HttpCodes.Unauthorized);
  }
}

// APIアクセス制限
export async function restrictAccess(req: NextApiRequest): Promise<ApiRequestError | undefined> {
  const headerError = checkVulnerabilities();
  if (headerError) return headerError;

  // アクセス権チェック
  const restrictedUserError = await restrictUserAccess();
  const tokenError = await restrictTokenAccess(req);

  if (restrictedUserError && tokenError) return tokenError;
}
