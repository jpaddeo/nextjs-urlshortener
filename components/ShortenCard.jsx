import { useState } from 'react';

import toast from 'react-simple-toasts';
import copy from 'copy-to-clipboard';

import { useUser } from '@auth0/nextjs-auth0';

import CONFIG from '@/libs/config';

import api from '@/services/api';
import { useLinksStore } from '@/store/links';
import { useTranslate } from '@/hooks/useTranslate';

export default function ShortenCard() {
  const addUserLink = useLinksStore((state) => state.addUserLink);
  const { lang } = useTranslate();

  const [url, setUrl] = useState('');
  const { user } = useUser();

  const handleChangeUrl = (e) => setUrl(e.target.value);

  const handleShortUrl = (e) => {
    e.preventDefault();
    api.short(url).then((responseData) => {
      const { data } = responseData;
      copy(`${CONFIG.NEXT_PUBLIC_URL}/${data?.shortUrl}`);
      addUserLink(data);
      toast(lang.index.resultShortUrlCopied);
      setUrl('');
    });
  };

  return (
    <div className='flex items-center justify-center mx-auto mt-12'>
      <div className='flex flex-col md:flex-row items-center justify-center gap-4 w-3/4 p-6 rounded-lg bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700'>
        <input
          type='text'
          autoFocus
          value={url}
          onChange={handleChangeUrl}
          placeholder='https://jpaddeo.work'
          className='w-full p-2 rounded-lg text-gray-700 font-medium'
        />
        <div className='group flex relative'>
          <button
            disabled={!user}
            onClick={handleShortUrl}
            className='border-2 border-white hover:border-dashed rounded-xl p-2 text-white font-medium disabled:cursor-not-allowed'
          >
            <span>{lang?.index?.search}</span>
          </button>
          <span class='group-hover:opacity-100 transition-opacity bg-gray-800 px-4 text-sm text-gray-100 rounded-md absolute -left-10 -bottom-24 md:left-28 md:-bottom-8 opacity-0 m-4 mx-auto w-40 py-2'>
            {lang?.index?.loginLegend}
          </span>
        </div>
      </div>
    </div>
  );
}
