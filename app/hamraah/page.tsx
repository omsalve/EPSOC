'use client';

import { Suspense } from 'react';
import HamraahStage from './HamraahStage';

export default function HamraahPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-gray-400 bg-black tracking-[0.3em] text-xs">
          LOADING…
        </div>
      }
    >
      <HamraahStage />
    </Suspense>
  );
}