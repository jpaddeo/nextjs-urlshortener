import { useUser } from '@auth0/nextjs-auth0';

import CONFIG from '@/libs/config';
import { useTranslate } from '@/hooks/useTranslate';

import Logo from '@/components/partials/Logo';
import Avatar from '@/components/partials/Avatar';
import LangSwitcher from '@/components/partials/LangSwitcher';
import { LogoutIcon } from '@/components/icons';

export default function Header() {
  const { user, error } = useUser();
  const { lang } = useTranslate();

  return (
    <nav className='bg-gray-800'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between gap-2'>
          <div className='flex flex-1 items-stretch justify-start'>
            <div className='ml-6 block'>
              <div className='flex space-x-4'>
                <Logo />
              </div>
            </div>
          </div>
          <LangSwitcher />
          {user ? (
            <div className='flex items-center justify-center gap-1'>
              <Avatar user={user} />
              <a
                href='/api/auth/logout'
                className='text-white'
                alt={lang?.index?.logout}
              >
                <LogoutIcon />
              </a>
            </div>
          ) : (
            <div className='flex items-center justify-center gap-2'>
              <a
                href={CONFIG.LOGIN_API_URL}
                className='text-white font-semibold border-2 hover:border-dashed hover:border-slate-500 p-2 rounded-xl'
              >
                {lang?.index?.login}
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
