import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format, formatDistanceToNow } from 'date-fns';

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
    maximumFractionDigits: 2,
  }).format(num);
};

export function formatRelativeTime(timestamp: string) {
  if (!timestamp) return 'Unknown time';
  const date = new Date(timestamp);
  if (isNaN(date.getTime())) {
    return 'Invalid date';
  }
  return formatDistanceToNow(date, { addSuffix: true });
}

export function getDate(dateString: string): string {
  const date = new Date(dateString);
  return format(date, 'MMM dd, yyyy'); // Example: "Sep. 10, 2024"
}

export function getTime(dateString: string): string {
  const date = new Date(dateString);
  return format(date, 'hh:mm a'); // Example: "03:50 PM"
}
