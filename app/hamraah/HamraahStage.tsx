'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PDFReader from '@/app/Components/PDF/PDFreader';
import LiquidEther from '@/app/Components/Background/LiquidEther';

const cinematicEase = [0.22, 1, 0.36, 1] as const;

export default function HamraahStage() {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [zoom, setZoom] = useState(1);

  const next = () => setPage((p) => Math.min(p + 1, pages));
  const prev = () => setPage((p) => Math.max(p - 1, 1));

  return (
    <section className="relative min-h-screen bg-black text-gray-100">

      {/* ── Background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LiquidEther
          colors={['#c0392b', '#e74c3c', '#922b21']}
          mouseForce={6}
          cursorSize={90}
          isViscous={false}
          resolution={0.3}
          autoDemo
          autoSpeed={0.15}
          autoIntensity={0.9}
          takeoverDuration={0.4}
          autoResumeDelay={6000}
          autoRampDuration={1}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-16 py-24 grid grid-cols-1 md:grid-cols-10 gap-14">

        {/* ══ LEFT META (40%) ══ */}
        <div className="md:col-span-4 flex flex-col gap-8">

          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: cinematicEase }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1 text-xs text-white/60">
              ● Special Edition · April 2026
            </span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: cinematicEase, delay: 0.1 }}
            className="space-y-3"
          >
            <h1 className="text-5xl md:text-6xl font-light leading-tight text-white">
              हमराह
            </h1>
            <p className="text-sm tracking-[0.25em] text-gray-400 uppercase">
              Hamraah
            </p>
          </motion.div>

          {/* Divider */}
          <div className="h-px w-16 bg-white/20" />

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: cinematicEase, delay: 0.2 }}
            className="space-y-5 text-sm text-gray-400 font-light leading-relaxed max-w-sm"
          >
            <p>
              A special publication by EPSOC, supported by the{' '}
              <span className="text-white/70">Mirae Asset Foundation — SVKM's NMIMS ESG Research Chair</span>.
            </p>
            <p>
              This issue turns the lens inward — examining disability not as a
              personal condition but as a structural outcome of the way the world
              is organised. Six essays, six voices, one shared question: who
              does society build itself for?
            </p>
            <p>
              Edited & designed by <span className="text-white/70">Shambhavi Singh</span>.
            </p>
          </motion.div>

          {/* Contributors */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: cinematicEase, delay: 0.3 }}
            className="space-y-2"
          >
            <p className="text-[10px] tracking-[0.35em] text-gray-600 uppercase mb-3">
              Contributors
            </p>
            {[
              { name: 'Palash Akshay Jain', essay: 'The World That Disabled Us' },
              { name: 'PJT Shah', essay: 'Asthma and Allergies' },
              { name: 'Nidhi Dahanukar', essay: 'Beyond Being Included' },
              { name: 'Johann Solanki', essay: 'Performative Inclusion' },
              { name: 'Prithviraj Suri', essay: 'The Patience We Prescribe' },
              { name: 'Aadi Kadam', essay: 'Social Inclusion & Community Support' },
            ].map((c) => (
              <div key={c.name} className="flex items-start gap-3 py-1 border-t border-white/5">
                <span className="text-xs text-white/80 w-36 shrink-0">{c.name}</span>
                <span className="text-xs text-white/40 italic">{c.essay}</span>
              </div>
            ))}
          </motion.div>

          {/* Supported by */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-4 text-[10px] tracking-[0.25em] text-gray-600 uppercase"
          >
            Supported by Mirae Asset Foundation
          </motion.div>
        </div>

        {/* ══ RIGHT PDF (60%) ══ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: cinematicEase, delay: 0.15 }}
          className="md:col-span-6 flex flex-col items-center"
        >
          {/* PDF Container */}
          <div className="relative flex h-[82vh] w-full items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-gray-900/80 to-black/95 p-4 shadow-[0_40px_160px_rgba(0,0,0,0.8)]">
            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-neutral-900/80 p-3">
              <PDFReader
                fileUrl="/hamraah.pdf"
                page={page}
                zoom={zoom}
                onPages={(num) => {
                  setPages(num);
                  setPage((p) => {
                    if (num <= 0) return 1;
                    if (p > num) return num;
                    if (p < 1) return 1;
                    return p;
                  });
                }}
              />
            </div>
          </div>

          {/* Controls */}
          <div className="mt-5 flex w-full max-w-xl items-center justify-between text-[11px] text-gray-400">

            {/* Pagination */}
            <div className="flex items-center gap-4 text-gray-300">
              <button
                onClick={prev}
                disabled={page <= 1}
                className="rounded-full border border-gray-700/80 px-3 py-1.5 uppercase tracking-[0.25em] disabled:border-gray-800 disabled:text-gray-600 hover:border-gray-400 hover:text-gray-100 transition"
              >
                ← Prev
              </button>

              <button
                onClick={next}
                disabled={page >= pages}
                className="rounded-full border border-gray-700/80 px-3 py-1.5 uppercase tracking-[0.25em] disabled:border-gray-800 disabled:text-gray-600 hover:border-gray-400 hover:text-gray-100 transition"
              >
                Next →
              </button>

              <span className="tracking-[0.25em] text-gray-500">
                {pages
                  ? `PAGE ${String(page).padStart(2, '0')} / ${String(pages).padStart(2, '0')}`
                  : 'LOADING…'}
              </span>
            </div>

            {/* Zoom */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] tracking-[0.25em] uppercase text-gray-500">Zoom</span>
              <div className="flex items-center gap-1 rounded-full border border-gray-800 bg-black/60 px-1.5 py-1">
                <button onClick={() => setZoom((z) => Math.max(0.8, z - 0.1))} className="px-2">−</button>
                <span className="px-2 text-[11px] text-gray-300">{Math.round(zoom * 100)}%</span>
                <button onClick={() => setZoom((z) => Math.min(2, z + 0.1))} className="px-2">+</button>
                <button
                  onClick={() => setZoom(1)}
                  className="px-2 text-[10px] uppercase tracking-[0.2em] text-gray-500"
                >
                  Fit
                </button>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}