import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function classNames(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs.filter(Boolean)));
}
