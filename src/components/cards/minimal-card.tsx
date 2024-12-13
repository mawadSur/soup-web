import { cn } from '@/lib/utils';
import * as React from 'react';

export const MinimalCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-2xl p-2 shadow-xl transition-colors hover:bg-neutral-100',
      className,
    )}
    {...props}
  >
    {children}
  </div>
));