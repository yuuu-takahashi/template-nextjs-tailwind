import { useEffect, useState } from 'react';

import { useResize } from '@/hooks/useResize';

export const useViewport = (standardWidth = 360) => {
  const { windowWidth } = useResize();
  const [viewport, setViewport] = useState(
    'width=device-width, initial-scale=1.0',
  );

  useEffect(() => {
    if (screen.width < standardWidth) {
      setViewport(`width=${standardWidth}`);
    }
  }, [windowWidth, standardWidth]);

  return { viewport };
};
