import { useTranslate } from '@/hooks/useTranslate';
import CONFIG from '@/libs/config';

export default function Footer() {
  const { lang } = useTranslate();

  return (
    <footer className='flex items-center justify-center w-full h-24'>
      <div
        className='flex items-center justify-center'
      >
        {lang?.footer?.madewith} <span className='animate-pulse mx-1'>💙</span> {lang?.footer?.madewithby}
        <a
          href={CONFIG.GITHUB_JPADDEO_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='ml-2 border-b border-dashed border-gray-500'
        >
          jpaddeo
        </a>
      </div>
    </footer>
  );
}
