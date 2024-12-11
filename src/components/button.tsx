import Link from 'next/link';
import React from 'react';

export type ButtonProps<AS extends React.ElementType = 'button'> =
  React.PropsWithChildren<{
    as?: AS;
    href?: string;
  }> &
  Omit<React.ComponentProps<AS>, 'as'>;

export const Button = <AS extends React.ElementType = 'button'>(
  props: ButtonProps<AS>
) => {
  const {
    as: Element = 'button',
    href,
    children,
    ...attrs
  } = props;

  if (Element === 'a' || href) {
    return (
      <Link href={href || ''} {...attrs as any}>
        {children}
      </Link>
    );
  }

  return (
    <Element {...attrs}>{children}</Element>
  );
};