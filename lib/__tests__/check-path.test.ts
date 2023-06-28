import { expect, test } from '@jest/globals';
import { checkPath } from '@/lib/check-path';

// allowListに乗ってたらtrue
test('checkPath', async () => {
  const allowList = ['/api', '/dashboard'];
  expect(checkPath('/api', allowList)).toEqual(true);
  expect(checkPath('/api/xxx', allowList)).toEqual(true);
  expect(checkPath('/dashboard?query=test', allowList)).toEqual(true);

  expect(checkPath('/', allowList)).toEqual(false);
  expect(checkPath('/aaa', allowList)).toEqual(false);
});
