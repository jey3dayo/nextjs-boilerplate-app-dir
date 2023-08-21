'use client';

import { signIn, signOut } from 'next-auth/react';
import { titles } from '@/constants';

export function SignInOut(props: { isLogin: boolean }) {
  return props.isLogin ? (
    <div onClick={() => void signOut()}>{titles.signOut}</div>
  ) : (
    <div onClick={() => void signIn()}>{titles.signIn}</div>
  );
}
