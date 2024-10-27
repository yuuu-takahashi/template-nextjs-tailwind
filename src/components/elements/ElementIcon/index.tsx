import { ElementImageInternal } from '@/components/elements/ElementImageInternal';

interface Props {
  name: string;
  size: string;
}

export const ElementIcon = ({ name, size }: Props) => {
  const iconSizeClass = {
    '14': 'size-14',
    '16': 'size-16',
    '20': 'size-20',
    '24': 'size-24',
    '32': 'size-32',
    '48': 'size-48',
    '64': 'size-64',
  }[size];

  return (
    <div className={iconSizeClass}>
      <ElementImageInternal src={`/common/icon_${name}`} type="svg" isContain />
    </div>
  );
};
