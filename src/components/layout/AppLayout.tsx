'use client';

import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import useFunnyLog from '@/hooks/useFunnyLog';
import AppLoading from './AppLoading';

interface AppLayoutProps {
  children: React.ReactNode;
}
export default function AppLayout({ children }: AppLayoutProps) {
  useFunnyLog();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div className="bg-[url(/images/grid.svg)]">
      {isLoading ? (
        <AppLoading />
      ) : (
        <>
          <Navbar />
          <div className="flex flex-col w-full min-h-[calc(100vh-56px)]">
            {children}
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
