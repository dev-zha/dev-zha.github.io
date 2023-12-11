import { Nunito, Source_Serif_4, JetBrains_Mono } from 'next/font/google';

export const fontTypeSan = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const fontTypeSerif = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
});

export const fontTypeMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});
