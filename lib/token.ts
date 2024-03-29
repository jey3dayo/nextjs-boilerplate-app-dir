'server-only';

import * as jose from 'jose';
import { Payload } from '@/types/jose';

type Options = {
  secret: Uint8Array;
  alg: string;
  claim: string;
  issuer: string;
  audience: string;
  expiresIn: string;
};

export function getOptions(authSecret: string, appName: string): Options {
  const secret: Uint8Array = new TextEncoder().encode(authSecret);
  return {
    secret,
    alg: 'HS256',
    claim: `urn:${appName}:claim`,
    issuer: `urn:${appName}:issuer`,
    audience: `urn:${appName}:client_id`,
    expiresIn: '720 hour',
  };
}

export async function signJwt(payload: Payload, options: Options) {
  const { secret, ...opts } = options;

  const jwt = await new jose.SignJWT(payload)
    .setProtectedHeader({ alg: opts.alg })
    .setIssuedAt()
    .setIssuer(opts.issuer)
    .setAudience(opts.audience)
    .setExpirationTime(opts.expiresIn)
    .sign(secret);

  return jwt;
}

export async function verifyJwt(jwt: string, options: Options): Promise<jose.JWTPayload | undefined> {
  // Optionsからsecret, algを除外
  const { secret, alg, ...opts } = options;
  try {
    const { payload, protectedHeader } = await jose.jwtVerify(jwt, secret, opts);
    if (protectedHeader.alg !== alg) throw new Error('invalid protectedHeader');

    return payload;
  } catch (e) {
    console.log(e);
    return undefined;
  }
}
