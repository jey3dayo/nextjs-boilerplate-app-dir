import { expect, test } from '@jest/globals';
import { isProduction } from '@/lib/utils';

test('isProduction', async () => {
  expect(isProduction).toEqual(false);
});
