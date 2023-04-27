export const Config = {
  DATABASE_URL: process.env.DATABASE_URL,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: process.env.REDIS_PORT || '6379',
  REDIS_PASSWORD: process.env.REDIS_PASSWORD,
  REDIS_LAZY_CONNECT: Boolean(process.env.REDIS_LAZY_CONNECT || 'true'),
  REDIS_ENABLE_AUTOPIPELINING: Boolean(
    process.env.REDIS_ENABLE_AUTOPIPELINING || 'true'
  ),
  REDIS_MAX_RETRIES_PER_REQUEST: parseInt(
    process.env.REDIS_MAX_RETRIES_PER_REQUEST || '0'
  ),
};
