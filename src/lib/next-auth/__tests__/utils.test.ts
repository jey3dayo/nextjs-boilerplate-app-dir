import { expect, describe } from '@jest/globals';
import { ROLE_ADMIN, ROLE_USER } from '@/constants';
import { checkAdmin, isTokenExpired } from '@/lib/next-auth/utils';

describe('checkAdmin', () => {
  it('アドミン権限の場合', () => {
    const result = checkAdmin(ROLE_ADMIN);
    expect(result).toBeTruthy();
  });

  it('ユーザ権限の場合', () => {
    const result = checkAdmin(ROLE_USER);
    expect(result).toBeFalsy();
  });

  it('nullの場合、falseを返す', () => {
    const result = checkAdmin(null);
    expect(result).toBe(false);
  });
});
