import { expect, test } from '@jest/globals';
import { isProduction } from '@/lib/utils';

test('isProduction', () => {
  expect(isProduction).toEqual(false);
});
