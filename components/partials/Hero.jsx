import { useUser } from '@auth0/nextjs-auth0';

import CONFIG from '@/libs/config';

import { useTranslate } from '@/hooks/useTranslate';

export default function Hero() {
  const { user, error } = useUser();
  const { lang } = useTranslate();

  return (
    <section className='hero py-12'>
      <div className='container flex flex-col items-center  justify-center mx-auto px-4'>
        <h1 className='text-4xl font-bold text-gray-800'>
          {lang?.hero?.description}...
          <span className='animate-pulse font-bold italic'>
            {lang?.hero?.description2}
          </span>
        </h1>
        <p className='text-lg text-gray-500 mb-4'>
          {lang?.hero?.subdescription}
        </p>
        {!user && (
          <a
            href={CONFIG.LOGIN_API_URL}
            className='bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg border-2 border-white hover:border-dashed'
          >
            {lang?.hero?.getStarted}
          </a>
        )}
      </div>
    </section>
  );
}
