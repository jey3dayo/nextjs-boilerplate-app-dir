import { expect, test } from '@jest/globals';
import { cn } from '@/lib/class-names';

test('cx', () => {
  const classes = ['aaa', 'bbb ccc'];
  expect(cn(...classes)).toEqual('aaa bbb ccc');
});
