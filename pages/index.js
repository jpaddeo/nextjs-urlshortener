import { useRef, useState } from 'react';

import Head from 'next/head';
import Image from 'next/image';

import { useUser } from '@auth0/nextjs-auth0';

import copy from 'copy-to-clipboard';
import toast from 'react-simple-toasts';

import { useTranslate } from '../hooks/useTranslate';
import LangSwitcher from '../components/LangSwitcher';

export default function Home() {
  const { user, error } = useUser();
  const { lang, loading } = useTranslate();
  const urlRef = useRef();
  const [shortUrl, setShortUrl] = useState('');

  if (loading) return <></>;
  if (error) return <div>Error: {error}</div>;

  const handleShort = (e) => {
    e.preventDefault();
    const url = urlRef.current.value;
    fetch('/api/short', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    })
      .then((res) => res.json())
      .then((responseData) => {
        const { data } = responseData;
        setShortUrl(process.env.NEXT_PUBLIC_URL + '/' + data?.shortUrl);
        // TODO: implement autocopy setting and use copy to autocopy:
        // copy(shortUrl);
        // toast(lang.index.resultShortUrlCopied);
      });
  };

  const handleCopyClick = () => {
    if (shortUrl.length) {
      copy(shortUrl);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>{lang.head.title}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content={lang.head.meta.description} />
        <meta property='og:title' content={lang.head.meta.og.title} />
        <meta
          property='og:description'
          content={lang.head.meta.og.description}
        />
        <meta property='og:url' content={lang.head.meta.og.url} />
        <meta property='og:type' content={lang.head.meta.og.type} />
      </Head>

      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <h1 className='text-6xl font-bold'>
          <a className='text-blue-600' href='https://surl.jpa.dev'>
            S-URL!
          </a>
        </h1>
        <div className='flex flex-col items-center justify-center space-y-5 mx-auto bg-blue-600 rounded-lg p-14 w-3/4'>
          <LangSwitcher />
          {user ? (
            <>
              <form className='w-full'>
                <h1 className='text-center font-bold text-white text-4xl'>
                  {lang.index.pastewrite}
                </h1>
                <p className='mx-auto font-normal text-sm my-6'>
                  {lang.index.instructions}
                </p>
                <div className='sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between'>
                  <input
                    ref={urlRef}
                    name='url'
                    className='text-base text-gray-500 flex-grow outline-none px-2'
                    type='text'
                    placeholder={lang.index.urlplaceholder}
                  />
                  <div className='sm:flex items-center px-2 rounded-lg space-x-4 mx-auto'>
                    <button
                      className='bg-blue-600 text-white text-base rounded-lg px-4 py-2 hover:font-bold hover:scale-95'
                      onClick={handleShort}
                    >
                      {lang.index.search}
                    </button>
                  </div>
                </div>
              </form>
              <div
                className={`flex items-center justify-between bg-gray-400 w-full rounded-xl p-3 ${
                  !shortUrl?.length ? 'hidden' : ''
                }`}
              >
                <code>{shortUrl}</code>
                <Image
                  src='/img/copy.svg'
                  width={28}
                  height={28}
                  className='cursor-pointer hover:text-blue-600 hover:opacity-60 transform hover:scale-95'
                  onClick={handleCopyClick}
                />
              </div>
            </>
          ) : (
            <a
              href='/api/auth/login'
              className='bg-white hover:opacity-60 transform hover:scale-95 text-blue-600 px-4 rounded-full h-14 w-24 inline-flex items-center justify-between'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
                />
              </svg>
              {lang.index.login || 'Login'}
            </a>
          )}
        </div>
      </main>

      <footer className='flex items-center justify-center w-full h-24 border-t'>
        <a
          className='flex items-center justify-center'
          href='https://github.com/jpaddeo'
          target='_blank'
          rel='noopener noreferrer'
        >
          Made with love by JPA
        </a>
      </footer>
    </div>
  );
}
