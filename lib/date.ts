import fromUnixTime from 'date-fns/fromUnixTime';
import isAfter from 'date-fns/isAfter';

export function isExpired(exp: number | undefined): boolean {
  if (exp === undefined) return false;

  const expirationDate = fromUnixTime(exp);
  const currentDate = new Date();
  return isAfter(currentDate, expirationDate);
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString('ja-JP', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
