import { ComponentPropsWithoutRef, ReactNode } from 'react';

interface Props extends ComponentPropsWithoutRef<'h1' | 'h2' | 'h3' | 'h4'> {
  children: ReactNode;
  size?: '16' | '24' | '32';
  weight?: '500' | '900';
  as: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
}

export const ElementHeading = ({
  children,
  size = '16',
  weight = '500',
  as: Tag,
  className = '',
  ...props
}: Props) => {
  const sizeClass = {
    '16': 'text-16',
    '24': 'text-24',
    '32': 'text-32',
  }[size];
  const weightClass = {
    '500': 'font-medium',
    '900': 'font-black',
  }[weight];

  return (
    <Tag className={`${sizeClass} ${weightClass} ${className}`} {...props}>
      {children}
    </Tag>
  );
};
