import { rGet, rSet } from '@/libs/redis';

import link from '@/models/link';

export default function ShortIdPage() {
  return <div>ShortID Redirect</div>;
}

export async function getServerSideProps({ params, req }) {
  const { shortId } = params;
  /*
  const { headers, connection } = req;
  const forwarded = headers['x-forwarded-for'];
  const ip = forwarded ? forwarded.split(/, /)[0] : connection.remoteAddress;
  */
 
  try {
    const cachedData = await rGet(shortId);
    if (cachedData) {
      await link.incrementClick(cachedData);
      return {
        redirect: {
          destination: cachedData.url,
        },
      };
    }
  } catch (error) {
    console.error(error);
  }

  const data = await link.get(shortId);

  if (!data) {
    return {
      redirect: { destination: '/' },
    };
  }

  await link.incrementClick(data);
  rSet(shortId, data);
  return {
    redirect: {
      destination: data.url,
    },
  };
}
