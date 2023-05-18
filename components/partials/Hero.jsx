import CONFIG from '@/libs/config';

import { useTranslate } from '@/hooks/useTranslate';

export default function Hero() {
  const { lang } = useTranslate();

  return (
    <section class='hero py-12'>
      <div class='container flex flex-col items-center  justify-center mx-auto px-4'>
        <h1 class='text-4xl font-bold text-gray-800'>
          Blazing fast and free{' '}
          <span className='animate-pulse font-bold italic'>forever</span> url
          shortener
        </h1>
        <p class='text-lg text-gray-500 mb-4'>
          Speed and Simplicity at Your Fingertips
        </p>
        <a
          href={CONFIG.LOGIN_API_URL}
          class='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded'
        >
          {lang?.index?.getStarted}
        </a>
      </div>
    </section>
  );
}
