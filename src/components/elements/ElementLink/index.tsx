import NextLink from 'next/link';
import { ComponentPropsWithoutRef, useMemo } from 'react';

type Props = ComponentPropsWithoutRef<'a'> & {
  href: string;
  className?: string;
};

export const ElementLink = ({
  children,
  href,
  className = '',
  ...props
}: Props) => {
  const isExternalLink = useMemo(() => /^https?:\/\//.test(href), [href]);

  if (isExternalLink) {
    return (
      <a
        href={href}
        rel="noopener noreferrer"
        className={className}
        target="_blank"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} prefetch={false} className={className} {...props}>
      {children}
    </NextLink>
  );
};
