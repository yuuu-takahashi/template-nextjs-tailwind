import { ElementImageInternal } from '@/components/elements/ElementImageInternal';

interface Props {
  name: string;
  size: string;
  isQuest?: boolean;
}

export const ElementIcon = ({ name, size, isQuest }: Props) => {
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
      <ElementImageInternal
        src={`/${isQuest ? 'quest' : 'common'}/icon_${name}`}
        type="svg"
        isContain
      />
    </div>
  );
};
