import { useRef, useState } from 'react';

import Head from 'next/head';
import Image from 'next/image';
import copy from 'copy-to-clipboard';

import { useTranslate } from '../hooks/useTranslate';

export default function Home() {
  const { lang, loading } = useTranslate();
  const urlRef = useRef();
  const [shortUrl, setShortUrl] = useState('');

  if (loading) return <></>;

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
      .then((data) => {
        setShortUrl(process.env.NEXT_PUBLIC_URL + "/" + data.shortUrl);
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
