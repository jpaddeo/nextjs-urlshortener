import { useState, useEffect } from 'react';
import { useLocale } from './useLocale';

export const useTranslate = () => {
  const [lang, setLang] = useState({});
  const [loading, setLoading] = useState(true);
  const { locale } = useLocale();

  useEffect(async () => {
    const response = await fetch(`/i18n/${locale}.json`);
    const json = await response.json();
    setLang(json);
    setLoading(false);
  }, [locale]);
  
  return { lang, loading };
};
