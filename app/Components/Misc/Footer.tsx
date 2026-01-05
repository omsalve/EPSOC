'use client';

import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="
        relative
        z-0
        -mt-48
        bg-black
        text-white
        pt-48
        pb-24
        overflow-hidden
      "
    >
      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

      <div className="relative mx-auto max-w-7xl px-8 pt-32 pb-24 md:px-16">
        {/* Upper Content */}
        <div className="grid grid-cols-1 gap-24 md:grid-cols-2">
          
          {/* Left Block */}
          <div className="space-y-16">
            <img
              className="h-100 w-auto"
              src="/epsoclogo.png"
              alt="EPSOC logo"
            />

            <span className="text-xs text-white/40">
              2025 EPSOC
            </span>
          </div>

          {/* Right Block */}
          <div className="flex flex-col items-end gap-6 pt-4">
            <div className="flex gap-4">
              <Instagram className="h-4 w-4 cursor-pointer text-white/50 transition hover:text-white" />
              <Linkedin className="h-4 w-4 cursor-pointer text-white/50 transition hover:text-white" />
            </div>

            <span className="text-sm text-white/80">
              Built Different.
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}
