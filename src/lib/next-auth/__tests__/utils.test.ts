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

describe('isTokenExpired', () => {
  it('有効期限切れの場合', () => {
    const expired = 1629453600; // 2021/08/20
    expect(isTokenExpired(expired)).toBeTruthy();
  });

  it('有効期限切れでない場合', () => {
    const notExpired = 4120917422; // 2100/08/03
    expect(isTokenExpired(notExpired)).toBeFalsy();
  });
});
