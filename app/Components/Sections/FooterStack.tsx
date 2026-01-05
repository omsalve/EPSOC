'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import PreFooter from '@/app/Components/Misc/PreFooter';
import Footer from '@/app/Components/Misc/Footer';

export default function FooterStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: '-20% 0px -20% 0px',
    once: true,
  });

  return (
    <section ref={ref} className="relative overflow-hidden">
      
      {/* PreFooter always visible */}
      <div className="relative z-10">
        <PreFooter />
      </div>

      {/* Footer slides in from underneath */}
      <motion.div
        initial={{ y: '40%' }}
        animate={isInView ? { y: 0 } : {}}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1], // heavy, Framer-style
        }}
        className="relative z-0"
      >
        <Footer />
      </motion.div>

    </section>
  );
}
