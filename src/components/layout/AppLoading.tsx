import React from 'react';
import LoadingLogo from '../shared/LoadingLogo';

export default function AppLoading() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-900">
      <LoadingLogo/>
    </div>
  );
}
