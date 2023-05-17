import { useState, useEffect } from 'react';
import { useLocale } from './useLocale';

export const useTranslate = () => {
  const [lang, setLang] = useState({});
  const [langLoading, setLangLoading] = useState(true);
  const { locale } = useLocale();

  useEffect(async () => {
    const response = await fetch(`/i18n/${locale}.json`);
    const json = await response.json();
    setLang(json);
    setLangLoading(false);
  }, [locale]);

  return { lang, langLoading };
};
