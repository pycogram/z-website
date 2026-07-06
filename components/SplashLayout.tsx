"use client"

import { useState } from 'react';
import { SplashScreen } from './SplashScreen';

export function SplashLayout({ children }: { children: React.ReactNode }) {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      <SplashScreen onDone={() => setSplashDone(true)} />
      {splashDone && children}
    </>
  );
}
