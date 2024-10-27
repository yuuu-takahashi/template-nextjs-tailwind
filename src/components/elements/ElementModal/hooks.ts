import { useCallback } from 'react';

import { disableScroll, enableScroll } from '@/libs/scroll';

export const useModal = (id: string) => {
  const getDialog = useCallback(
    () => document.getElementById(id) as HTMLDialogElement,
    [id],
  );

  const open = useCallback(() => {
    const dialog = getDialog();
    if (!dialog) return;
    dialog.showModal();
    disableScroll();
  }, [getDialog]);

  const close = useCallback(() => {
    const dialog = getDialog();
    if (!dialog) return;
    dialog.close();
    enableScroll();
  }, [getDialog]);

  return { open, close };
};
