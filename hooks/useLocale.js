import { useRouter } from 'next/router';

const FLAGS_EMOJIS = {
  cn: '🇨🇳',
  es: '🇪🇸',
  en: '🇺🇸',
  pt: '🇵🇹',
};

export const useLocale = () => {
  const router = useRouter();
  const { locales, locale } = router;

  const changeLocale = (newLocale) => {
    router.replace('/', '/', { locale: newLocale });
  };

  const getFlagLocale = (locale) => {
    return FLAGS_EMOJIS[locale] || '';
  };

  return { locale, locales, changeLocale, getFlagLocale };
};
