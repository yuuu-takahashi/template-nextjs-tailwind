import { ComponentPropsWithoutRef } from 'react';

import { ElementIcon } from '@/components/elements/ElementIcon';
import { ElementText } from '@/components/elements/ElementText';

interface Props extends ComponentPropsWithoutRef<'input'> {
  id: string;
  value: string;
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hoverClass: string;
}

export const ElementCheckBox = ({
  id,
  value,
  isChecked,
  onChange,
  hoverClass,
  ...props
}: Props) => {
  return (
    <label className={`flex cursor-pointer items-center gap-8 ${hoverClass}`}>
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        {...props}
      />
      <span
        className={`relative inline-block size-20 rounded-4 border-2 border-black ${isChecked ? 'bg-black' : 'bg-white'}`}
      >
        {isChecked && (
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <ElementIcon name="check" size="20" />
          </div>
        )}
      </span>
      <ElementText size="16" className={`${isChecked ? 'line-through' : ''}`}>
        {value}
      </ElementText>
    </label>
  );
};
