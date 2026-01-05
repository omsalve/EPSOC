'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Home, Menu } from 'lucide-react';
import AnimatedMenu from './AnimatedMenu';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header has NO height */}
      <header className="fixed top-0 left-0 z-50 w-full pointer-events-none">
        
        {/* Smoke gradient ONLY */}
        <div
          className="
            relative top-0 left-0 w-full
            h-20
            bg-gradient-to-b
            from-[rgba(134,134,134,0.35)]
            to-transparent
          "
        />

        {/* Floating content (no height contribution) */}
        <div className="absolute top-0 left-0 w-full pointer-events-auto">
          <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            
            {/* Left */}
            <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wide text-white/90">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              <span>Open Call for Homoeconomicus Special Edition</span>
            </div>

            {/* Center */}
            <Link
              href="/"
              aria-label="Home"
              className="absolute left-1/2 -translate-x-1/2 text-white/90 hover:text-white transition"
            >
              <Home size={20} />
            </Link>

            {/* Right */}
            <button
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="text-white/90 hover:text-white transition"
            >
              <Menu size={22} />
            </button>

          </div>
        </div>
      </header>

      <AnimatedMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
