'use client';

import { motion, type Variants } from 'framer-motion';
import LiquidEther from '@/app/Components/Background/LiquidEther';
import Button from '../Misc/Button';
import Stars from '../Background/Stars';

/* -------------------- EASING -------------------- */
const cinematicEase = [0.22, 1, 0.36, 1] as const;

/* -------------------- VARIANTS -------------------- */
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.4,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
    filter: 'blur(10px)',
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: cinematicEase,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative h-screen mt-[-100px] overflow-hidden bg-black">

      {/* -------------------- Stars -------------------- */}
      <Stars count={3} />

      {/* -------------------- Background -------------------- */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={['#FFFFFF', '#D1D1D1', '#8A8A8A']}
          mouseForce={12}
          cursorSize={120}
          isViscous={false}
          resolution={0.4}
          autoDemo
          autoSpeed={0.25}
          autoIntensity={1.4}
          takeoverDuration={0.3}
          autoResumeDelay={4000}
          autoRampDuration={0.8}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70" />
      </div>

      {/* -------------------- Content -------------------- */}
      <div className="relative z-10 h-full">
        <div className="mx-auto flex h-full max-w-7xl gap-28 px-8 md:px-16 pt-[18vh]">

          {/* ---------- Left: Text ---------- */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1 max-w-[560px] space-y-12"
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-light text-gray-100 leading-tight tracking-tight"
            >
              Economic <span className="text-gray-600">&</span><br />
              Political Society
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-sm md:text-base text-gray-400 leading-[2.8] font-light"
            >
              A polity — a union of spirited individuals — driven not merely by
              ambition and achievement, but by humility and relevance. A conduit
              for the passions of the Sarla Anil Modi School of Economics’
              homo&nbsp;economicus.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-2 text-gray-300 text-sm tracking-wide"
            >
              <span className="text-lg">©</span>
              <span>EST. 2025</span>
            </motion.div>

            
          </motion.div>

          {/* ---------- Right: Logo ---------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.4,
              ease: cinematicEase,
            }}
            className="hidden md:flex flex-1 justify-end items-start pt-12"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 90,
                ease: 'linear',
                repeat: Infinity,
              }}
              className="relative w-[520px] h-[520px] flex items-center justify-center"
            >
              <img
                src="/epsoclogo.png"
                alt="EPSOC"
                className="w-full h-full object-contain opacity-95"
              />

              {/* Subtle orbit ring */}
              <div className="absolute inset-0 rounded-full border-t border-gray-500/20" />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* -------------------- Scroll Cue -------------------- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <svg
          className="w-5 h-5 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 3v18m0 0l-6-6m6 6l6-6"
          />
        </svg>
      </motion.div>

    </section>
  );
}
