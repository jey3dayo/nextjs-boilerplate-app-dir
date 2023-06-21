'use client';

import { signIn, signOut } from 'next-auth/react';

export function SignInOut(props: { isLogin: boolean }) {
  return props.isLogin ? (
    <div onClick={() => signOut()}>サインアウト</div>
  ) : (
    <div onClick={() => signIn()}>サインイン</div>
  );
}
