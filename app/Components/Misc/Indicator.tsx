'use client';

import { ReactNode } from 'react';
import clsx from 'clsx';

interface IndicatorProps {
  children: ReactNode;
  className?: string;
}

export default function Indicator({ children, className }: IndicatorProps) {
  return (
    <div
      className={clsx(
        `
        inline-flex items-center gap-2 rounded-full px-4 py-2
        bg-white/5
        backdrop-blur-md
        border border-white/10
        shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
        `,
        className
      )}
    >
      

      {/* Text */}
      <span className="text-xs font-medium tracking-wide text-white/90">
        {children}
      </span>
    </div>
  );
}
