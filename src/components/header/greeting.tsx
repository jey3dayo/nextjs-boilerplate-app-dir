import React from 'react';
import { fetcher } from '@/lib/fetcher';

export async function Greeting() {
  const user: User = await fetcher('/api/user', { cache: 'no-store' });
  return <div>{`こんにちは${user?.name ?? 'ゲスト'}さん`}</div>;
}
