'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams, useRouter } from 'next/navigation';
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
  const searchParams = useSearchParams();
  const router = useRouter();

  const [active, setActive] = useState(pdfs[0]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);

  // 🔑 zoom multiplier (1 = fit)
  const [zoom, setZoom] = useState(1);
  // Track the last query we wrote to the URL to avoid reacting to our own updates.
  const lastWriteRef = useRef<{ vol: string; page: string } | null>(null);

  const updateQuery = (vol: string, pageNum: number) => {
    const pageStr = String(pageNum);
    lastWriteRef.current = { vol, page: pageStr };
    try {
      router.replace(`/archive?vol=${vol}&page=${pageStr}`);
    } catch (e) {
      // noop
    }
  };

  const next = () => {
    if (page >= pages) return;
    const nextPage = page + 1;
    setPage(nextPage);
    updateQuery(active.id, nextPage);
  };

  const prev = () => {
    if (page <= 1) return;
    const prevPage = page - 1;
    setPage(prevPage);
    updateQuery(active.id, prevPage);
  };

  // Initialize from URL search params (vol, page). Runs on first render and when params change.
  useEffect(() => {
    const volParam = searchParams?.get('vol');
    const pageParam = searchParams?.get('page');

    const resolved = pdfs.find((p) => p.id === volParam) ?? pdfs[0];

    // If this search param change was just written by us, ignore it to avoid a loop.
    if (
      lastWriteRef.current &&
      lastWriteRef.current.vol === (volParam ?? resolved.id) &&
      lastWriteRef.current.page === (pageParam ?? '1')
    ) {
      lastWriteRef.current = null;
      return;
    }

    // Update active volume only when it actually changed.
    setActive((prev) => {
      if (prev.id === resolved.id) return prev;
      // volume changed via URL -> reset zoom
      setZoom(1);
      return resolved;
    });

    const parsed = pageParam ? parseInt(pageParam, 10) : 1;
    const safe = !isNaN(parsed) && parsed >= 1 ? parsed : 1;
    setPage((prev) => (prev === safe ? prev : safe));
  }, [searchParams]);

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
              {pdfs.map((pdf) => {
                const isActive = active.id === pdf.id;
                return (
                  <button
                    key={pdf.id}
                    onClick={() => {
                        setActive(pdf);
                        setPage(1);
                        setZoom(1); // reset zoom on volume change

                        // Update URL to reflect the selected volume and reset page to 1
                        updateQuery(pdf.id, 1);
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
          // Key on active id only so page/zoom updates don't remount the whole container.
          key={active.id}
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
                  onPages={(num) => {
                    setPages(num);

                    // If current page is outside new bounds, clamp it and sync URL.
                    setPage((p) => {
                      let newP = p;
                      if (num <= 0) newP = 1;
                      else if (p > num) newP = num;
                      else if (p < 1) newP = 1;

                      if (newP !== p) {
                        updateQuery(active.id, newP);
                      }

                      return newP;
                    });
                  }}
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
