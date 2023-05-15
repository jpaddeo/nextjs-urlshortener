import { useLocale } from '@/hooks/useLocale';

const LangSwitcher = () => {
  const { locale, locales, changeLocale, getFlagLocale } = useLocale();

  return (
    <select
      defaultValue={locale}
      onChange={changeLocale}
      className='cursor-pointer p-1 uppercase bg-transparent text-white font-semibold hover:opacity-80 transform transition duration-100 focus-visible:rounded-none'
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
  );
};

export default LangSwitcher;
