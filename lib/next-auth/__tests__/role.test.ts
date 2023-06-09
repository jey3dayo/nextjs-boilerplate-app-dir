import { describe, expect } from '@jest/globals';
import { checkAdmin, ROLE_ADMIN, ROLE_USER } from '@/lib/next-auth/role';

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
