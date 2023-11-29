import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface AppLayoutProps {
  children: React.ReactNode;
}
export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="bg-[url(/images/grid.svg)]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
