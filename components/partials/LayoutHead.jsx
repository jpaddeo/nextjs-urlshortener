import Head from 'next/head';

import { useTranslate } from '@/hooks/useTranslate';

export default function LayoutHead() {
  const { lang, langLoading } = useTranslate();

  if (langLoading) return <></>;
  return (
    <Head>
      <title>{lang.head.title}</title>
      <link rel='icon' href='/favicon.ico' />
      <meta name='description' content={lang.head.meta.description} />
      <meta name='keywords' content={lang.head.meta.keywords} />

      <meta property='twitter:card' content={lang.head.meta.twitter.card} />
      <meta property='twitter:url' content={lang.head.meta.twitter.url} />
      <meta property='twitter:title' content={lang.head.meta.twitter.title} />
      <meta
        property='twitter:description'
        content={lang.head.meta.twitter.description}
      />
      <meta property='twitter:image' content={lang.head.meta.twitter.image} />

      <meta property='og:type' content={lang.head.meta.og.type} />
      <meta property='og:url' content={lang.head.meta.og.url} />
      <meta property='og:title' content={lang.head.meta.og.title} />
      <meta property='og:description' content={lang.head.meta.og.description} />
      <meta property='og:image' content={lang.head.meta.og.image} />
    </Head>
  );
}
