import { describe, expect } from '@jest/globals';
import { env } from '@/env.mjs';
import { Payload } from '@/types/jose';
import { getOptions, signJwt, verifyJwt } from '@/lib/token';

const userId = 'clj3utoac0000h9g61v0ow4gu';

describe('getOptions', () => {
  it('should return options', () => {
    const options = getOptions(env.NEXTAUTH_SECRET, env.NEXT_PUBLIC_APP_NAME);
    expect(options).toHaveProperty('secret');
    expect(options.secret).toBeInstanceOf(Uint8Array);
    expect(options).toMatchObject({
      alg: 'HS256',
      audience: 'urn:Awesome App:client_id',
      claim: 'urn:Awesome App:claim',
      expiresIn: '720 hour',
      issuer: 'urn:Awesome App:issuer',
    });
  });
});

let jwt = '';
describe('signJwt', () => {
  const options = getOptions(env.NEXTAUTH_SECRET, env.NEXT_PUBLIC_APP_NAME);

  it('should return jwt', async () => {
    const input: Payload = { id: userId };
    jwt = await signJwt(input, options);
    expect(typeof jwt).toEqual('string');
  });
});

describe('verifyJwt', () => {
  const options = getOptions(env.NEXTAUTH_SECRET, env.NEXT_PUBLIC_APP_NAME);

  it('should return payload', async () => {
    const payload = await verifyJwt(jwt, options);
    expect(payload).toMatchObject({
      id: userId,
      iss: 'urn:Awesome App:issuer',
      aud: 'urn:Awesome App:client_id',
    });
  });

  it('failed return payload', async () => {
    const input = 'invalid token';
    const payload = await verifyJwt(input, options);
    expect(payload).toBeUndefined();
  });
});
