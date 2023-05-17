const CONFIG = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  LOGIN_API_URL: process.env.LOGIN_API_URL || '/api/auth/login',
  GITHUB_JPADDEO_URL:
    process.env.GITHUB_JPADDEO_URL || 'https://github.com/jpaddeo',
  NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
  AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
  AUTH0_BASE_URL: process.env.AUTH0_BASE_URL,
  AUTH0_SECRET: process.env.AUTH0_SECRET,
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PASSWORD: process.env.REDIS_PASSWORD,
  REDIS_PORT: Number(process.env.REDIS_PORT || 6379),
};
export default CONFIG;
