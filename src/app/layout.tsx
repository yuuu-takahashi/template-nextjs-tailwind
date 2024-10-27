import '@/styles/globals.css';

import { Noto_Sans_JP } from 'next/font/google';
import { ReactNode } from 'react';

const notoSansJP = Noto_Sans_JP({
  variable: '--noto-sans-jp',
  subsets: ['latin'],
  display: 'swap',
});

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>
        <header>Header</header>
        <main className={notoSansJP.variable}>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
};

export default RootLayout;
