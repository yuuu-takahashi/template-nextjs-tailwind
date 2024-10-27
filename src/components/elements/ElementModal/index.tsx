import { ReactNode, useEffect } from 'react';

import { ElementIcon } from '@/components/elements/ElementIcon';

interface Props {
  children: ReactNode;
  id: string;
  close: () => void;
}

export const ElementModal = ({ children, id, close }: Props) => {
  useEffect(() => {
    const dialog = document.getElementById(id);
    if (!dialog) return;

    const click = (e: MouseEvent) => {
      const isDialogClicked = e.target === dialog;
      if (isDialogClicked) {
        close();
      }
    };

    dialog.addEventListener('click', click);

    return () => {
      dialog.removeEventListener('click', click);
    };
  }, [close, id]);

  return (
    <dialog
      className="cursor-pointer border-0 bg-transparent p-0 backdrop:bg-[rgba(0,0,0,0.7)]"
      id={id}
    >
      <div onClick={(e) => e.stopPropagation()} className="cursor-pointer">
        <div className="relative">
          <button
            className="absolute right-16 top-16 flex size-48 items-center justify-center rounded-8 hover:bg-lightGray"
            onClick={close}
          >
            <ElementIcon name="close" size="32" />
          </button>
        </div>
        {children}
      </div>
    </dialog>
  );
};
