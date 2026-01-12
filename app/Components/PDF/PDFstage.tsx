'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PDFReader from './PDFreader';

const cinematicEase = [0.22, 1, 0.36, 1] as const;

const pdfs = [
  {
    id: 'vol1',
    label: 'HOMO ECONOMICUS · VOL I',
    src: '/homoeconvol1.pdf',
  },
  {
    id: 'vol2',
    label: 'HOMO ECONOMICUS · VOL II',
    src: '/homoeconvol2.pdf',
  },
];

export default function PDFStage() {
  const [active, setActive] = useState(pdfs[0]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);

  // 🔑 zoom multiplier (1 = fit)
  const [zoom, setZoom] = useState(1);

  const next = () => page < pages && setPage(p => p + 1);
  const prev = () => page > 1 && setPage(p => p - 1);

  return (
    <section className="relative min-h-screen bg-black px-6 md:px-16 py-24">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-10 gap-14">

        {/* ================= LEFT · META (40%) ================= */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="space-y-3">
            <p className="text-[11px] tracking-[0.35em] text-gray-500 uppercase">
              Archive / Print
            </p>

            <h1 className="text-2xl md:text-3xl font-light tracking-wide text-gray-100 leading-tight">
              Homo Economicus
              <br />
              <span className="text-gray-400 text-lg md:text-xl">
                Editorial Anthology
              </span>
            </h1>
          </div>

          {/* Volume Switch */}
          <nav className="flex flex-col gap-2 pt-2 text-[11px] tracking-[0.3em]">
            {pdfs.map(pdf => {
              const isActive = active.id === pdf.id;
              return (
                <button
                  key={pdf.id}
                  onClick={() => {
                    setActive(pdf);
                    setPage(1);
                    setZoom(1); // reset zoom on volume change
                  }}
                  className={`w-fit rounded-full border px-5 py-2 transition ${
                    isActive
                      ? 'border-gray-300 bg-gray-100/10 text-gray-100'
                      : 'border-gray-700/70 bg-black text-gray-500 hover:border-gray-400 hover:text-gray-200'
                  }`}
                >
                  {pdf.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* ================= RIGHT · PDF (60%) ================= */}
        <motion.div
          key={`${active.id}-${page}-${zoom}`}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: cinematicEase }}
          className="md:col-span-6 flex justify-center"
        >
          <div className="w-full flex flex-col items-center">

            {/* ---------- PDF CONTAINER ---------- */}
            <div className="relative flex h-[82vh] w-full items-center justify-center overflow-hidden rounded-3xl border border-gray-900/70 bg-gradient-to-b from-gray-900/80 to-black/95 p-4 shadow-[0_40px_160px_rgba(0,0,0,0.8)]">
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-neutral-900/80 p-3">
                <PDFReader
                  fileUrl={active.src}
                  page={page}
                  zoom={zoom}
                  onPages={setPages}
                />
              </div>
            </div>

            {/* ---------- CONTROLS ---------- */}
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
                    ? `PAGE ${page.toString().padStart(2, '0')} / ${pages
                        .toString()
                        .padStart(2, '0')}`
                    : 'LOADING…'}
                </span>
              </div>

              {/* Zoom */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] tracking-[0.25em] uppercase text-gray-500">
                  Zoom
                </span>
                <div className="flex items-center gap-1 rounded-full border border-gray-800 bg-black/60 px-1.5 py-1">
                  <button
                    onClick={() => setZoom(z => Math.max(0.8, z - 0.1))}
                    className="px-2"
                  >
                    −
                  </button>
                  <span className="px-2 text-[11px] text-gray-300">
                    {Math.round(zoom * 100)}%
                  </span>
                  <button
                    onClick={() => setZoom(z => Math.min(2, z + 0.1))}
                    className="px-2"
                  >
                    +
                  </button>
                  <button
                    onClick={() => setZoom(1)}
                    className="px-2 text-[10px] uppercase tracking-[0.2em] text-gray-500"
                  >
                    Fit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
