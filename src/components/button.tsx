import Link from 'next/link';
import React, { ElementType, ComponentProps, PropsWithChildren } from 'react';

export type ButtonProps<AS extends ElementType> =
  PropsWithChildren<{
    as?: AS;
    href?: string;
  }> &
  Omit<ComponentProps<AS>, 'as'>;

export const Button = <AS extends ElementType = 'button'>(
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