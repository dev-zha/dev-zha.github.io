'use client';

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import useFunnyLog from '@/hooks/useFunnyLog';

interface AppLayoutProps {
  children: React.ReactNode;
}
export default function AppLayout({ children }: AppLayoutProps) {
  useFunnyLog();
  return (
    <div className="bg-[url(/images/grid.svg)]">
      <Navbar />
      <div className="flex flex-col w-full min-h-[calc(100vh-56px)]">
        {children}
      </div>
      <Footer />
    </div>
  );
}
