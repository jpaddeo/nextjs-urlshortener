import Redis from 'ioredis';

import CONFIG from '@/libs/config';

const client = new Redis({
  host: CONFIG.REDIS_HOST,
  port: CONFIG.REDIS_PORT,
  password: CONFIG.REDIS_PASSWORD,
  enableAutoPipelining: true,
  maxRetriesPerRequest: 0,
  lazyConnect: true,
  retryStrategy: (times) => {
    if (times > 3)
      throw new Error(`[redis] coudn't connect after ${times} retries`);
    const delay = Math.min(times * 200, 1000);
    return delay;
  },
});

client.on('error', (err) => console.error('[redis] Client Error', err));

export const rSet = async (key, value) => {
  await client.set(key, JSON.stringify(value));
};

export const rGet = async (key) => {
  const value = await client.get(key);
  return JSON.parse(value);
};
