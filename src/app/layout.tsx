import type { Metadata } from 'next';
import AppLayout from '@/components/layout/AppLayout';
import { profileData } from '@/data/profile';
import { fontTypeMono, fontTypeSan, fontTypeSerif } from '@/data/fonts';
import ProgressBar from '@/components/layout/ProgressBar';
import './globals.css';

export const metadata: Metadata = {
  title: profileData.name,
  description: `${profileData.name}'s Portfolio`,
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  openGraph: {
    title: profileData.name,
    description: `${profileData.name}'s Portfolio`,
    images: '/images/open-graph/home-og.png',
    siteName: `Zaw Htet Aung's Portfolio`,
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
        <ProgressBar/>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
