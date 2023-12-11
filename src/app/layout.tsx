import type { Metadata } from 'next';
import AppLayout from '@/components/layout/AppLayout';
import { profileData } from '@/data/profile';
import { fontTypeMono, fontTypeSan, fontTypeSerif } from '@/data/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: profileData.name,
  description: `${profileData.name}'s Portfolio`,
  openGraph: {
    title: profileData.name,
    description: `${profileData.name}'s Portfolio`,
    images: 'images/home-og.png',
    siteName: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fontTypeSan.variable} ${fontTypeSerif.variable} ${fontTypeMono.variable} font-sans`}
      >
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
