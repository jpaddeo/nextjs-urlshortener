import prisma from '@/lib/prisma';
import { cache } from '@/lib/cache';

export const redirectURL = async (shortURL: string) => {
  const cachedURL = await cache.get(shortURL);
  if (cachedURL) {
    return cachedURL;
  }
  const dbURL = await prisma.url.findFirst({
    where: {
      shortURL: shortURL as string,
    },
  });
  if (dbURL) {
    await cache.set(shortURL as string, dbURL.longURL);
    return dbURL.longURL;
  }
  return null;
};
