export const getFlagLocale = (locale) => {
  const flagsEmojis = {
    cn: 'π¨π³',
    es: 'πͺπΈ',
    en: 'πΊπΈ',
    pt: 'π΅πΉ',
  };
  return flagsEmojis[locale] || '';
};
