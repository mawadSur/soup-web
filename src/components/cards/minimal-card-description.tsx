import { cn } from "@/lib/utils";
import React from "react";

export const MinimalCardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-base mt-2 text-black/70 font-light pb-2 px-1', className)} {...props} />
  ),
);