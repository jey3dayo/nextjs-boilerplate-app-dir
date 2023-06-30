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
  const token = await getToken({ req, raw: true });
  return verifyJwt(token);
}

// ヘッダーのチェック
// TODO: throwしたほうがいいかあとで考える
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

// // 管理者以外は403で落とす
// export const restrictAdminAccess = (done) => async (req, res) => {
//   // ログイン済みの場合
//   const session = await auth0.getSession(req, res);
//   if (session?.user) {
//     req.profile = session;
//     req.userId = session?.user?.sub ?? '';
//
//     let user = await User.query().findById(req.userId);
//     if (!user) user = await saveProfile(session.user);
//     req.isAdmin = Boolean(user.role === ROLE_ADMIN);
//
//     if (req.isAdmin) return done(req, res);
//   }
//
//   // トークンからprofileがとれればAdmin扱い
//   const token = (req.query.token || req.headers.authorization || '').replace(/^Bearer /, '');
//   const profile = decodeToken(token);
//   if ('id' in profile && profile.iss === 'https://asta.caad.isca.jp') {
//     req.profile = profile;
//     req.userId = profile.id;
//     req.isAdmin = true;
//     return done(req, res);
//   }
//
//   return res.status(403).json(messages.cantAccess);
// };
//
// // リソースのowner以外を落とす
// export const restrictOwnerAccessForEvent = (done) => async (req, res) => {
//   const {
//     userId,
//     isAdmin,
//     query: { id },
//   } = req;
//
//   const event = await Event.query()
//     .select([
//       'id',
//       'title',
//       'channel',
//       'offTube',
//       'tag',
//       'purposes',
//       'status',
//       'start',
//       'end',
//       'streamStart',
//       'streamEnd',
//       'roomIds',
//       'tech',
//       'production',
//       'artDepartment',
//       'isSetup',
//       'isMeeting',
//       'needSecurity',
//       'description',
//       'producers',
//       'createdBy',
//       'updatedBy',
//       'adminComment',
//     ])
//     .findById(id);
//
//   if (!event) return res.status(404).json(messages.notFound);
//
//   // 管理者ではなく、許可ユーザーでもない人は403
//   const allowUsers = event.producers;
//   if (!isAdmin && !allowUsers.includes(userId)) {
//     return res.status(403).json(messages.cantAccess);
//   }
//
//   // 2回リクエスト投げたくないので置いとく
//   req.event = event;
//
//   return done(req, res);
// };
//
// // リソースのowner以外を落とす
// //
// export const restrictOwnerAccessForRoomSchedule = (done) => async (req, res) => {
//   const {
//     userId,
//     isAdmin,
//     query: { id },
//   } = req;
//
//   const roomSchedule = await RoomSchedule.query()
//     .select([
//       'id',
//       'title',
//       'channel',
//       'description',
//       'guestNames',
//       'guestSuffixes',
//       'producers',
//       'roomIds',
//       'status',
//       'start',
//       'end',
//       'createdBy',
//       'updatedBy',
//       'adminComment',
//     ])
//     .findById(id);
//
//   if (!roomSchedule) return res.status(404).json(messages.notFound);
//
//   // 管理者ではなく、許可ユーザーでもない人は403
//   const allowUsers = roomSchedule.producers;
//   if (!isAdmin && !allowUsers.includes(userId)) {
//     return res.status(403).json(messages.cantAccess);
//   }
//
//   // 2回リクエスト投げたくないので置いとく
//   req.roomSchedule = roomSchedule;
//
//   return done(req, res);
// };
//
// // リソースのowner以外落とす
// export const restrictOwnerAccessForEvents = (done) => async (req, res) => {
//   const {
//     userId,
//     isAdmin,
//     body: { ids, status },
//   } = req;
//
//   const promises = checkEvents({ ids, status, isAdmin, userId, Model: Event });
//   const result = await Promise.all(promises);
//   const allowIds = result.filter((v) => v);
//   if (allowIds.length === 0) return res.status(403).json(messages.cantAccess);
//   req.body.ids = allowIds;
//
//   return done(req, res);
// };
//
// // リソースのowner以外落とす
// export const restrictOwnerAccessForRoomSchedules = (done) => async (req, res) => {
//   const {
//     userId,
//     isAdmin,
//     body: { ids, status },
//   } = req;
//
//   const promises = checkEvents({
//     ids,
//     status,
//     isAdmin,
//     userId,
//     Model: RoomSchedule,
//   });
//   const result = await Promise.all(promises);
//   const allowIds = result.filter((v) => v);
//   if (allowIds.length === 0) return res.status(403).json(messages.cantAccess);
//   req.body.ids = allowIds;
//
//   return done(req, res);
// };
