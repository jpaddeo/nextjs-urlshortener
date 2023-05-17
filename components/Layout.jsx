import React from 'react';
import LayoutHead from '@/components/partials/LayoutHead';
import Footer from '@/components/partials/Footer';
import Header from '@/components/partials/Header';

export default function Layout({ children }) {
  return (
    <>
      <LayoutHead />
      <main>
        <Header />
        <div className='flex flex-col items-center justify-center max-w-5xl mx-auto'>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
