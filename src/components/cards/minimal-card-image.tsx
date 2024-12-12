import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export const MinimalCardImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { src: string; alt: string }
>(({ className, alt, src, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'relative h-[190px] w-full rounded-[20px] mb-6',
      'shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05),0px_1px_1px_0px_rgba(255,252,240,0.5)_inset,0px_0px_0px_1px_hsla(0,0%,100%,0.1)_inset,0px_0px_1px_0px_rgba(28,27,26,0.5)]',
      className,
    )}
    {...props}
  >
    <Image
      src={src}
      alt={alt}
      width={200}
      height={200}
      className="rounded-[16px] object-cover absolute h-full w-full inset-0 "
    />
    <div className="absolute inset-0 rounded-[16px]">
      <div
        className={cn(
          'absolute inset-0 rounded-[16px]',
          'shadow-[0px_0px_0px_1px_rgba(0,0,0,.07),0px_0px_0px_3px_#fff,0px_0px_0px_4px_rgba(0,0,0,.08)]',
        )}
      />
      <div className={cn('absolute inset-0 rounded-[16px]')} />
    </div>
  </div>
));