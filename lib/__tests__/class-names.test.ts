import { expect, test } from '@jest/globals';
import classNames from '@/lib/class-names';

test('classNames', async () => {
  const classes = ['aaa', 'bbb ccc'];
  expect(classNames(...classes)).toEqual('aaa bbb ccc');
});
