import { describe, expect } from '@jest/globals';
import { Payload } from '@/types/jose';
import { signJwt, verifyJwt } from '@/lib/token';

const userId = 'clj3utoac0000h9g61v0ow4gu';

describe('signJwt', () => {
  it('should return jwt', async () => {
    const input: Payload = { id: userId };
    const jwt = await signJwt(input);
    expect(typeof jwt).toEqual('string');
  });
});

describe('verifyJwt', () => {
  it('should return payload', async () => {
    const input =
      'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6ImNsajN1dG9hYzAwMDBoOWc2MXYwb3c0Z3UiLCJpYXQiOjE2ODgwNjAyNDcsImlzcyI6InVybjpDQVA6aXNzdWVyIiwiYXVkIjoidXJuOkNBUDpjbGllbnRfaWQiLCJleHAiOjE2OTA2NTIyNDd9.xC4ELXJDDF1v-FY4HmKYyfRQzkUd_InWxMNYXF1lCrc';
    const payload = await verifyJwt(input);
    expect(payload?.id).toEqual(userId);
  });

  it('failed return payload', async () => {
    const input = 'invalid token';
    const payload = await verifyJwt(input);
    expect(payload).toBeUndefined();
  });
});
