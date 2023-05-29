import React from 'react';
import { getServerSession } from 'next-auth/next';

export async function Greeting() {
  const session = await getServerSession();
  return <div>{`こんにちは ${session?.user?.name ?? 'ゲスト'} さん`}</div>;
}
