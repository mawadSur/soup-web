"use client";

import React from "react";

import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

export function TypingAnimation({
  text,
  duration = 30,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = React.useState<string>("");
  const [i, setI] = React.useState<number>(0);

  React.useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i]);

  return (
    <p
      className={cn(
        "drop-shadow-sm",
        className,
      )}
    >
      {displayedText ? displayedText : text}
    </p>
  );
}
