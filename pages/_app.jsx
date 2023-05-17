import 'tailwindcss/tailwind.css';

import { UserProvider } from '@auth0/nextjs-auth0';

function UrlShortenerApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default UrlShortenerApp;
