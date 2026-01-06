'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { X } from 'lucide-react';

interface AnimatedMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AnimatedMenu({ isOpen, onClose }: AnimatedMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="
            fixed top-0 left-0 w-full
            h-[65vh]
            z-[100]
            bg-[#0f0f0f]
            text-white
          "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="absolute top-6 right-6 text-white/80 hover:text-white transition"
          >
            <X size={22} />
          </button>

          {/* Main grid */}
          <div className="relative mx-auto h-full max-w-7xl px-6">
            <div className="grid h-full grid-cols-12 items-center">
              
              {/* Center nav */}
              <motion.nav
                className="col-span-12 flex flex-col items-center gap-6 text-xl"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.07 } },
                }}
              >
                {MENU_ITEMS.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="hover:opacity-70 transition"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              {/* Bottom left */}
              <div className="absolute bottom-6 left-6 text-xs text-white/70 flex items-center gap-2">
                <span>✉</span>
                <span>contact@epsoc.in</span>
              </div>

              {/* Bottom center */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/70">
                ☎ +91 82916 42758
              </div>

              {/* Bottom right */}
              <div className="absolute bottom-6 right-6 text-xs text-white/70 flex items-center gap-2">
                <span>📍</span>
                <span>SAMSOE, NMIMS MUMBAI</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const MENU_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '#aboutus' },
  { label: 'Editorial', href: '/editorial' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/CTA' },
  { label: 'Read Homoeconomicus', href: '/read' },
];
    