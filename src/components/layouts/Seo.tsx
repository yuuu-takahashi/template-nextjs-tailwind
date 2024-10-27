import Head from 'next/head';

import { APP_BASE_PATH } from '@/config/env';
import { useViewport } from '@/hooks/useViewport';

const META = {
  title: 'Next.js テンプレート',
  description: 'Next.js テンプレート',
  ogp: `${APP_BASE_PATH}images/ogp.png`,
};

type Props = {
  title?: string;
  description?: string;
  url?: string;
};

export const Seo = ({ title, description = META.description, url }: Props) => {
  const { viewport } = useViewport();
  const fullTitle = title ? `${title} | ${META.title}` : META.title;

  return (
    <Head>
      <title>{title}</title>
      <meta content={viewport} name="viewport" />
      <meta content={description} name="description" />
      <meta content={url} property="og:url" />
      <meta content={fullTitle} property="og:title" />
      <meta content={fullTitle} property="og:site_name" />
      <meta content={description} property="og:description" />
      <meta content="website" property="og:type" />
      <meta content={META.ogp} property="og:image" />
      <meta content="1200" property="og:image:width" />
      <meta content="630" property="og:image:height" />
      <link href={url} rel="canonical" />
    </Head>
  );
};
