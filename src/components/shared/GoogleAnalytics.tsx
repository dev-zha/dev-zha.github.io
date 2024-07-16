import React from 'react';
import { GoogleAnalytics as GA } from '@next/third-parties/google';

export default function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

  if (!measurementId) {
    return null;
  }

  return <GA gaId={measurementId} />;
}
