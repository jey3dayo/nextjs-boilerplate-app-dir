'use client';

import React from 'react';
import { signIn, signOut } from 'next-auth/react';

export default function SignInOut(props: { isLogin: boolean }) {
  return props.isLogin ? (
    <div onClick={() => signOut()}>サインアウト</div>
  ) : (
    <div onClick={() => signIn()}>サインイン</div>
  );
}
