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
        {children}
      </main>
      <Footer />
    </>
  );
}
