import { useEffect } from 'react';

import CONFIG from '@/libs/config';

import { useLinksStore } from '@/store/links';

import Layout from '@/components/Layout';
import ShortenCard from '@/components/ShortenCard';
import ShortedCard from '@/components/ShortedCard';

export default function Home() {
  const fetchUserLinks = useLinksStore((state) => state.fetchUserLinks);
  const userLinks = useLinksStore((state) => state.userLinks);

  useEffect(() => {
    fetchUserLinks();
  }, []);

  return (
    <Layout>
      <ShortenCard />
      {userLinks?.map(({ url, shortUrl }) => (
        <ShortedCard
          key={shortUrl}
          origin={url}
          shorted={`${CONFIG.NEXT_PUBLIC_URL}/${shortUrl}`}
        />
      ))}
    </Layout>
  );
}
