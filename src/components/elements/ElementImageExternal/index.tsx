import { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'img'> & {
  isLazy?: boolean;
  isContain?: boolean;
};

export const ElementImageExternal = ({
  src,
  alt,
  isLazy = true,
  isContain = false,
  ...props
}: Props) => {
  return (
    <picture>
      <img
        alt={alt}
        className={`block size-full ${isContain ? 'object-contain' : 'object-cover'}`}
        loading={isLazy ? 'lazy' : 'eager'}
        src={src}
        {...props}
      />
    </picture>
  );
};
