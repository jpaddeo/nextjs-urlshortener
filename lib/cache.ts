import { createRedisInstance } from '@/lib/redis';

export const cache = {
  get: async (shortURL: string | string[] | undefined) => {
    const redis = createRedisInstance();
    const cachedURL = await redis.get(shortURL as string);
    return cachedURL;
  },
  set: async (shortURL: string, longURL: string) => {
    const redis = createRedisInstance();
    await redis.set(shortURL, longURL);
  },
};
