import { getServerSession } from 'next-auth/next';
import React from 'react';

export async function Greeting() {
  const session = await getServerSession();
  return <div>{`こんにちは ${session?.user?.name ?? 'ゲスト'} さん`}</div>;
}
