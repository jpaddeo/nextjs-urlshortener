'use client';

import { useState } from 'react';

import toast from 'react-hot-toast';

import LoadingDots from '@/components/loading-dots';

export default function ShortenerForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        fetch('/api/shorten', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            longURL: e.currentTarget.url.value,
          }),
        }).then(async (res) => {
          setLoading(false);
          if (res.status === 200) {
            const { shortURL } = await res.json();
            setResult(shortURL);
            toast.success(`URL: ${shortURL}`);
          } else {
            toast.error(await res.text());
          }
        });
      }}
      className='flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16'
    >
      <div>
        <label htmlFor='url' className='block text-xs text-gray-600 uppercase'>
          Your long URL
        </label>
        <input
          id='url'
          name='url'
          type='text'
          placeholder='https://google.com'
          autoComplete='url'
          required
          className='mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm'
        />
      </div>
      {result && (
        <div>
          <label
            htmlFor='short_url'
            className='block text-xs text-gray-600 uppercase'
          >
            Your REALLY Short URL
          </label>
          <input
            id='short_url'
            name='short_url'
            type='text'
            value={`http://localhost:3000/${result}`}
            className='mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm bg-slate-200'
            readOnly={true}
          />
        </div>
      )}

      <button
        disabled={loading}
        className={`${
          loading
            ? 'cursor-not-allowed border-gray-200 bg-gray-100'
            : 'border-black bg-black text-white hover:bg-white hover:text-black'
        } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
      >
        {loading ? <LoadingDots color='#808080' /> : <p>Short</p>}
      </button>
    </form>
  );
}
