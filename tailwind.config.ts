import type { Config } from 'tailwindcss';

const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
      serif: ['var(--font-serif)', ...defaultTheme.fontFamily.serif],
      mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      primary: {
        DEFAULT: '#10b981',
        50: '#ecfdf5',
        100: '#d1fae5',
        200: '#a7f3d0',
        300: '#6ee7b7',
        400: '#34d399',
        500: '#10b981',
        600: '#059669',
        700: '#047857',
        800: '#065f46',
        900: '#064e3b',
        950: '#022c22',
      },
      neutral: {
        50: '#f7faf9',
        100: '#f2f5f4',
        200: '#e3e8e7',
        300: '#cbd6d4',
        400: '#9cadaa',
        500: '#6a807b',
        600: '#4b5e5a',
        700: '#2c423e',
        800: '#1b332f',
        900: '#102623',
        950: '#051412',
      },
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
        950: '#030712',
      },
    },
    extend: {},
  },
  plugins: [],
};
export default config;
