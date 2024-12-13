import { cn } from "@/lib/utils";
import React from "react";

export const MinimalCardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn('text-lg mt-2 text-black font-bold leading-tight px-1', className)} {...props} />
  ),
);