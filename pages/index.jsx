import { useEffect } from 'react';

import CONFIG from '@/libs/config';

import { useLinksStore } from '@/store/links';

import Layout from '@/components/Layout';
import ShortenCard from '@/components/ShortenCard';
import ShortedCard from '@/components/ShortedCard';
import Hero from '@/components/partials/Hero';

export default function Home() {
  const fetchUserLinks = useLinksStore((state) => state.fetchUserLinks);
  const userLinks = useLinksStore((state) => state.userLinks);

  useEffect(() => {
    fetchUserLinks();
  }, []);

  return (
    <Layout>
      <Hero />
      <section className='bg-gray-100 py-6 flex-1'>
        <ShortenCard />
        {userLinks?.map(({ url, shortUrl, clicks }) => (
          <ShortedCard
            key={shortUrl}
            origin={url}
            shorted={`${CONFIG.NEXT_PUBLIC_URL}/${shortUrl}`}
            clicks={clicks}
          />
        ))}
      </section>
    </Layout>
  );
}
