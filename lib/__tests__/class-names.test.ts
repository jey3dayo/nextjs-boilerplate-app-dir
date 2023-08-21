import { expect, test } from '@jest/globals';
import { cx } from '@/lib/class-names';

test('cx', () => {
  const classes = ['aaa', 'bbb ccc'];
  expect(cx(...classes)).toEqual('aaa bbb ccc');
});
