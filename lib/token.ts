import * as jose from 'jose';
import { env } from '@/env.mjs';
import { Payload } from '@/types/jose';

const secret: Uint8Array = new TextEncoder().encode(env.NEXTAUTH_SECRET);
const alg = 'HS256';
export const options = {
  claim: `urn:${env.NEXT_PUBLIC_APP_NAME}:claim`,
  issuer: `urn:${env.NEXT_PUBLIC_APP_NAME}:issuer`,
  audience: `urn:${env.NEXT_PUBLIC_APP_NAME}:client_id`,
  expiresIn: '720 hour',
};

export async function signJwt(payload: Payload) {
  const jwt = await new jose.SignJWT(payload)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer(options.issuer as string)
    .setAudience(options.audience as string)
    .setExpirationTime(options.expiresIn)
    .sign(secret);

  return jwt;
}

export async function verifyJwt(jwt: string): Promise<jose.JWTPayload | undefined> {
  try {
    const { payload, protectedHeader } = await jose.jwtVerify(jwt, secret, options);
    if (protectedHeader.alg !== alg) throw new Error('invalid protectedHeader');

    return payload as jose.JWTPayload;
  } catch (e) {
    return undefined;
  }
}
