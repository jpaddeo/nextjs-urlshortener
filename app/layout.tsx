// These styles apply to every route in the application
import '@/styles/globals.css';

import type { Metadata } from 'next';

import { Yanone_Kaffeesatz } from '@next/font/google';

import Toaster from '@/components/toaster';
import AuthStatus from '@/components/auth-status';

const yanonekaffeesatz = Yanone_Kaffeesatz({
  variable: '--font-yanonekaffeesatz',
  subsets: ['latin-ext'],
});

export const metadata: Metadata = {
  applicationName: 'URL Shortener',
  authors: {
    name: 'Juan Pablo Addeo',
    url: 'https://jpaddeo.work/',
  },
  keywords: ['url', 'short', 'shortener', 'link', 'links', 'shorten'],
  title: {
    default: 'URL Shortener',
    template: '%s | URL Shortener',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'URL Shortener',
    siteName: 'URL Shortener',
    description: 'URL Shortener application',
  },
  twitter: {
    title: 'URL Shortener',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const AuthStatusDiv = await AuthStatus();
  return (
    <html lang='en'>
      <body className={yanonekaffeesatz.variable}>
        <Toaster />
        {AuthStatusDiv}
        {children}
      </body>
    </html>
  );
}
