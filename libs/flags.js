export const getFlagLocale = (locale) => {
  const flagsEmojis = {
    cn: '🇨🇳',
    es: '🇪🇸',
    en: '🇺🇸',
    pt: '🇵🇹',
  };
  return flagsEmojis[locale] || '';
};
