import Head from 'next/head';

import { APP_BASE_PATH } from '@/config/env';
import { useViewport } from '@/hooks/useViewport';

type Props = {
  pageTitle?: string;
  pageDescription?: string;
  pagePath?: string;
  pageImg?: string;
  pageImgWidth?: number;
  pageImgHeight?: number;
};

export const Seo = ({
  pageTitle,
  pageDescription,
  pagePath,
  pageImg,
  pageImgWidth,
  pageImgHeight,
}: Props) => {
  const { viewport } = useViewport();
  const defaultTitle = 'Next.js テンプレート';
  const defaultDescription = 'Next.js テンプレート';
  const defaultPagePath = process.env.NEXT_PUBLIC_BASE_PATH;

  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle;
  const description = pageDescription ? pageDescription : defaultDescription;
  const url = pagePath ? pagePath : defaultPagePath;
  const imgUrl = pageImg ? pageImg : `${APP_BASE_PATH}images/ogp.png`;
  const imgWidth = pageImgWidth ? pageImgWidth : 1200;
  const imgHeight = pageImgHeight ? pageImgHeight : 630;

  return (
    <Head>
      <title>{title}</title>
      <meta content={viewport} name="viewport" />
      <meta content={description} name="description" />
      <meta content={url} property="og:url" />
      <meta content={title} property="og:title" />
      <meta content={title} property="og:site_name" />
      <meta content={description} property="og:description" />
      <meta content="website" property="og:type" />
      <meta content={imgUrl} property="og:image" />
      <meta content={String(imgWidth)} property="og:image:width" />
      <meta content={String(imgHeight)} property="og:image:height" />
      <link href={url} rel="canonical" />
    </Head>
  );
};
