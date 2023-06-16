import crypto from 'crypto';

export function generateShortHash(input: string): string {
  return crypto.createHash('sha256').update(input).digest('base64').slice(0, 6);
}
