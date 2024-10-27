import { ComponentPropsWithoutRef, ReactNode } from 'react';

interface Props extends ComponentPropsWithoutRef<'p'> {
  children: ReactNode;
  size?: '14' | '16' | '24' | '32' | '64';
  isSpan?: boolean;
  weight?: '500' | '700';
  family?: 'notoSans';
  truncateWidth?: number;
  className?: string;
}

export const ElementText = ({
  children,
  size = '16',
  isSpan = false,
  weight = '700',
  family = 'notoSans',
  truncateWidth,
  className = '',
  ...props
}: Props) => {
  const textSizeClass = {
    '14': 'text-14',
    '16': 'text-16',
    '24': 'text-24',
    '32': 'text-32',
    '64': 'text-64',
  }[size];
  const textWeightClass = {
    '500': 'font-medium',
    '700': 'font-bold',
  }[weight];
  const familyClass = {
    notoSans: 'font-Noto_Sans',
  }[family];
  const truncateClass = truncateWidth
    ? `block truncate max-w-${truncateWidth} overflow-hidden`
    : '';
  const Tag = isSpan ? 'span' : 'p';

  return (
    <Tag
      className={`${textSizeClass} ${textWeightClass} ${familyClass} ${truncateClass} font-black ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};
