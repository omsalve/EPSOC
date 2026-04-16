'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};

export default function HamraahFeature() {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-120px' }}
      className="relative bg-black px-10 sm:px-14 md:px-20 lg:px-28 xl:px-36 py-28"
    >
      {/* Section label */}
      <motion.div variants={fadeUp} className="mb-12">
        <span className="text-gray-500 text-sm tracking-widest uppercase">
          © Special Edition
        </span>
      </motion.div>

      {/* Card */}
      <motion.div variants={fadeUp}>
        <Link href="/hamraah">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.35, ease }}
            className="
              group relative overflow-hidden rounded-3xl border border-white/8
              bg-gradient-to-br from-[#1a0a08] via-[#0d0505] to-black
              cursor-pointer
            "
          >
            {/* Red liquid accent top-right */}
            <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-red-900/20 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 rounded-full bg-red-950/10 blur-2xl" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-0">

              {/* LEFT TEXT */}
              <div className="flex flex-col justify-between p-10 md:p-14 gap-10">
                <div className="space-y-6">
                  <span className="inline-flex items-center gap-2 rounded-full border border-red-900/40 bg-red-950/30 px-4 py-1 text-xs text-red-300/70">
                    ● Special Edition · April 2026
                  </span>

                  <div>
                    <h2 className="text-6xl md:text-7xl font-light text-white leading-none mb-2">
                      हमराह
                    </h2>
                    <p className="text-sm tracking-[0.3em] text-gray-500 uppercase">
                      Hamraah
                    </p>
                  </div>

                  <p className="text-sm text-gray-400 font-light leading-relaxed max-w-xs">
                    Six essays on disability, structural exclusion, and the world
                    we collectively built — and must collectively rebuild.
                  </p>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    Supported by the Mirae Asset Foundation –<br />
                    SVKM's NMIMS ESG Research Chair
                  </p>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-3">
                  <span className="text-sm text-white/60 group-hover:text-white transition duration-300">
                    Read the Issue
                  </span>
                  <motion.span
                    className="text-white/40 group-hover:text-white transition duration-300"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    →
                  </motion.span>
                </div>
              </div>

              {/* RIGHT CONTRIBUTORS */}
              <div className="flex flex-col justify-center p-10 md:p-14 border-t md:border-t-0 md:border-l border-white/5 gap-1">
                <p className="text-[10px] tracking-[0.35em] text-gray-600 uppercase mb-4">
                  Essays in this issue
                </p>
                {[
                  { name: 'Palash Akshay Jain', essay: 'The World That Disabled Us' },
                  { name: 'PJT Shah', essay: 'Asthma and Allergies' },
                  { name: 'Nidhi Dahanukar', essay: 'Beyond Being Included' },
                  { name: 'Johann Solanki', essay: 'Performative Inclusion' },
                  { name: 'Prithviraj Suri', essay: 'The Patience We Prescribe' },
                  { name: 'Aadi Kadam', essay: 'Social Inclusion & Community Support' },
                ].map((c, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 py-2.5 border-b border-white/5 last:border-0"
                  >
                    <span className="text-[10px] text-white/20 mt-0.5 w-4 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <p className="text-xs text-white/80 leading-snug">{c.essay}</p>
                      <p className="text-[10px] text-white/30 mt-0.5">{c.name}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        </Link>
      </motion.div>
    </motion.section>
  );
}