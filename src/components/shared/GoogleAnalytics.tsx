import React from 'react';
import { GoogleAnalytics as GoogleAnalyticsFromLib } from '@next/third-parties/google';

export default function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_MEASUREMENT_ID || "G-DG56DWKNWN";

  if (!measurementId) {
    return null;
  }

  return <GoogleAnalyticsFromLib gaId={measurementId} />;
}
