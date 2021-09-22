import { useRouter } from 'next/router';

import { getFlagLocale } from '../libs/flags';

const LangSwitcher = () => {
  const router = useRouter();
  const { locale, locales } = router;
  const changeLocale = (e) => {
    const locale = e.target.value;
    router.push('/', '/', { locale });
  };
  return (
    <nav>
      <select
        defaultValue={locale}
        onChange={changeLocale}
        className='border-2 border-solid border-white p-1 uppercase bg-transparent text-white font-semibold hover:opacity-80 transform transition duration-100 hover:scale-105 focus-visible:rounded-none'
      >
        {locales.map((loc) => (
          <option
            key={loc}
            value={loc}
            className='flex items-center justify-center space-x-1 bg-transparent text-blue-600 font-bold'
          >
            {`${getFlagLocale(loc)} ${loc}`}
          </option>
        ))}
      </select>
    </nav>
  );
};

export default LangSwitcher;
