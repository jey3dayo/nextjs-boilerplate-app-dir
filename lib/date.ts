import fromUnixTime from 'date-fns/fromUnixTime';
import isBefore from 'date-fns/isBefore';

export function isExpired(exp: number | undefined): boolean {
  if (exp === undefined) return false;

  const expirationDate = fromUnixTime(exp);
  const currentDate = new Date();
  return isBefore(expirationDate, currentDate);
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString('ja-JP', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
