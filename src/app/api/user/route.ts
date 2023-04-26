import { NextResponse } from 'next/server';
import { generateShortHash } from '@/lib/hash';

// TODO: authで書き換える
export function GET(_request: Request) {
  const input = `${Math.random()}`;
  return NextResponse.json({ name: '最場', email: 'john@example.com', hash: generateShortHash(input) });
}
