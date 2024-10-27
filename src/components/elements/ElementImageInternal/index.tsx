import { ComponentPropsWithoutRef, useMemo } from 'react';

const IMAGE_ROOT_PATH = '/images';
const SP_MAX = 1024;

type Props = ComponentPropsWithoutRef<'img'> & {
  type?: 'jpg' | 'png' | 'svg';
  src: string;
  isLazy?: boolean;
  alt?: string;
  isResponsive?: boolean;
  isFullHeight?: boolean;
  isContain?: boolean;
};

export const ElementImageInternal = ({
  src,
  alt = '',
  type = 'png',
  isLazy = true,
  isResponsive = false,
  isFullHeight = false,
  isContain = false,
  ...props
}: Props) => {
  if (isResponsive && (props.width || props.height)) {
    throw new Error('widthとheightはisResponsiveがtrueの場合指定できません');
  }

  const newSrc = useMemo(() => {
    return `${IMAGE_ROOT_PATH}${src}.${type}`;
  }, [type, src]);

  const image = useMemo(() => {
    return (
      <picture>
        <img
          alt={alt}
          className={`block ${isFullHeight ? 'h-full w-auto' : 'h-auto w-full'} ${isResponsive ? 'h-full object-cover' : ''} ${isContain ? 'object-contain' : ''}`}
          style={isContain ? { width: '100%', height: '100%' } : {}}
          loading={isLazy ? 'lazy' : 'eager'}
          src={newSrc}
          {...props}
        />
      </picture>
    );
  }, [alt, isResponsive, isFullHeight, isLazy, newSrc, props, isContain]);

  if (!isResponsive) return image;

  return (
    <picture>
      <source
        media={`(max-width: ${SP_MAX}px)`}
        srcSet={newSrc.replace(`.${type}`, `_sp.${type}`)}
        type={`image/${type}`}
      />
      {image}
    </picture>
  );
};
