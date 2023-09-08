import fromUnixTime from 'date-fns/fromUnixTime';
import isAfter from 'date-fns/isAfter';

const INVALID_DATE_MESSAGE = 'Invalid Date';

export function isExpired(exp: number | undefined): boolean {
  if (exp === undefined) return false;

  const expirationDate = fromUnixTime(exp);
  const currentDate = new Date();
  return isAfter(currentDate, expirationDate);
}

export function formatDate(input: string | number): string {
  const date = new Date(input);

  if (isNaN(date.getTime())) {
    throw new Error('Invalid date input');
  }

  const formattedDate = date.toLocaleDateString('ja-JP', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  if (formattedDate === INVALID_DATE_MESSAGE) {
    throw new Error('Failed to format date');
  }

  return formattedDate;
}
