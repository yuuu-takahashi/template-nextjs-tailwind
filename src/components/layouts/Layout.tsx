import { ReactNode } from 'react';

import { RootLayout } from '@/components/layouts/RootLayout';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return <RootLayout>{children}</RootLayout>;
};
