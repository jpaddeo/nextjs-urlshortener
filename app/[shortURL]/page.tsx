import { redirect } from 'next/navigation';

import { redirectURL } from '@/lib/urls';

type ShortURL = {
  shortURL: string;
};
export default async function Home({ params }: { params: ShortURL }) {
  const { shortURL } = params;

  if (shortURL) {
    const redURL = await redirectURL(shortURL);
    if (redURL) {
      redirect(redURL);
    }
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-gray-50'>
      <div className='z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-100 shadow-xl'>
        <div className='flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16'>
          <h3 className='text-xl font-semibold animate-pulse'>
            Loading...{shortURL}
          </h3>
        </div>
      </div>
    </div>
  );
}
