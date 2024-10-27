import { NextPageWithLayout } from 'next';

import { Layout } from '@/components/layouts/Layout';
import { Seo } from '@/components/layouts/Seo';
import { TopPage } from '@/components/pages/top';

const Top: NextPageWithLayout = () => {
  return (
    <>
      <Seo pagePath="http://localhost:3000/" />
      <TopPage />
    </>
  );
};

Top.getLayout = (page) => <Layout>{page}</Layout>;

export default Top;
