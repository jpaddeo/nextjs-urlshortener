export const hashb62 = (id: number) => {
  if (id === 0) return '0';
  const ALPHABETH =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let hash = '';
  while (id > 0) {
    hash = ALPHABETH[id % ALPHABETH.length] + hash;
    id = Math.floor(id / ALPHABETH.length);
  }
  return hash;
};
