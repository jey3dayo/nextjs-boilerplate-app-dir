import { describe, expect, it } from '@jest/globals';
import { isExpired } from '@/lib/date';

describe('isExpired', () => {
  it('有効期限切れの場合', () => {
    const expired = 1629453600; // 2021/08/20
    expect(isExpired(expired)).toBeTruthy();
  });

  it('有効期限切れでない場合', () => {
    const notExpired = 4120917422; // 2100/08/03
    expect(isExpired(notExpired)).toBeFalsy();
  });
});
