'use client';

import { signIn, signOut } from 'next-auth/react';
import { titles } from '@/constants';

export function SignInOut(props: { isLogin: boolean }) {
  return props.isLogin ? (
    <div onClick={() => signOut()}>{titles.signOut}</div>
  ) : (
    <div onClick={() => signIn()}>{titles.signOut}</div>
  );
}
