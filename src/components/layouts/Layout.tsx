import { ReactNode } from 'react';

import { RootLayout } from './RootLayout';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return <RootLayout>{children}</RootLayout>;
};
