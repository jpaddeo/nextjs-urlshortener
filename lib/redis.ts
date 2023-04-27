import { Redis, RedisOptions } from 'ioredis';

import { Config } from '@/lib/config';

const REDIS_OPTIONS: RedisOptions = {
  lazyConnect: Config.REDIS_LAZY_CONNECT,
  enableAutoPipelining: Config.REDIS_ENABLE_AUTOPIPELINING,
  maxRetriesPerRequest: Config.REDIS_MAX_RETRIES_PER_REQUEST,
  host: Config.REDIS_HOST,
  port: parseInt(Config.REDIS_PORT),
  password: Config.REDIS_PASSWORD,
};

export const createRedisInstance = () => {
  try {
    const redis = new Redis(REDIS_OPTIONS);
    redis.on('error', (error: Error) => {
      console.error('[REDIS] Error connecting', error);
    });
    return redis;
  } catch (e) {
    throw new Error(`[REDIS] Could not create a Redis instance`);
  }
};
