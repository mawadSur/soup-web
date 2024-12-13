import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { formatDistanceToNow } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatNumber = (num: number, currency = '$', locale = 'en-US') => {
  if (!Number.isFinite(num)) {
    throw new Error('Invalid number input');
  }

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency.replace('$', 'USD'),
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(num);
};

export function formatRelativeTime(timestamp: string) {
  if (!timestamp) return 'Unknown time';
  return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
}
