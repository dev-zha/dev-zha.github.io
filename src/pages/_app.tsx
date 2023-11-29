import type { AppProps } from 'next/app';
import { Nunito, Source_Serif_4, JetBrains_Mono } from 'next/font/google';
import AppLayout from '@/components/layout/AppLayout';
import useScrollToHash from '@/hooks/useScrollToHash';
import '@/styles/globals.css';

const fontTypeSan = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const fontTypeSerif = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
});

const fontTypeMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export default function App({ Component, pageProps }: AppProps) {
  // Scroll to element if url has hash
  useScrollToHash();

  return (
    <main
      className={`${fontTypeSan.variable} ${fontTypeSerif.variable} ${fontTypeMono.variable} font-sans`}
    >
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </main>
  );
}
