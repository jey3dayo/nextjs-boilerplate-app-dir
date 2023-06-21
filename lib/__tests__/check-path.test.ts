import { expect, test } from '@jest/globals';
import { checkPath } from '@/lib/check-path';

// whiteListに乗ってたらtrue
test('checkPath', async () => {
  const whitelist = ['/api', '/dashboard'];
  expect(checkPath('/api', whitelist)).toEqual(true);
  expect(checkPath('/api/xxx', whitelist)).toEqual(true);
  expect(checkPath('/dashboard?query=test', whitelist)).toEqual(true);

  expect(checkPath('/', whitelist)).toEqual(false);
  expect(checkPath('/aaa', whitelist)).toEqual(false);
});
