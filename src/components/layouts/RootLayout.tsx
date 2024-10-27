import { Noto_Sans_JP } from 'next/font/google';
import { ReactNode } from 'react';

export const FONT_WEIGHT = {
  Noto_Sans_JP: ['200', '300', '400', '500', '700'],
};

const notoSansJP = Noto_Sans_JP({
  variable: '--noto-sans-jp',
  weight: ['200', '300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

type Props = {
  children: ReactNode;
};

export const RootLayout = ({ children }: Props) => {
  return <main className={notoSansJP.variable}>{children}</main>;
};
