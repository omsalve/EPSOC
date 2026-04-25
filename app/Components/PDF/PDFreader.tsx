'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';


type PDFReaderProps = {
  fileUrl: string;
  page: number;
  onPages: (total: number) => void;
  zoom: number; 
};

export default function PDFReader({
  fileUrl,
  page,
  onPages,
  zoom,
}: PDFReaderProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pdfDocRef = useRef<any>(null);
  const renderTaskRef = useRef<any>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadPdf() {
      try {
        setLoading(true);
        setError(false);

        const pdfjs: any = await import('pdfjs-dist');

        pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

        const task = pdfjs.getDocument(fileUrl);
        const doc = await task.promise;
        if (cancelled) return;

        pdfDocRef.current = doc;
        onPages(doc.numPages);

        await renderPage(doc, page, zoom);
      } catch (err) {
        console.error(err);
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadPdf();
    return () => {
      cancelled = true;
      if (renderTaskRef.current && typeof renderTaskRef.current.cancel === 'function') {
        try {
          renderTaskRef.current.cancel();
        } catch (e) {
          // noop
        }
        renderTaskRef.current = null;
      }
    };
  }, [fileUrl, onPages]);

  useEffect(() => {
    if (!pdfDocRef.current) return;
    renderPage(pdfDocRef.current, page, zoom);
  }, [page, zoom]);

  async function renderPage(doc: any, pageNum: number, zoomMul = 1) {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const pdfPage = await doc.getPage(pageNum);

    // Natural size
    const baseViewport = pdfPage.getViewport({ scale: 1 });

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Fit primarily to HEIGHT (editorial behavior)
let scale = containerHeight / baseViewport.height;

// Safety clamp: don’t let it get absurdly wide
const maxWidthScale = containerWidth / baseViewport.width;
if (scale > maxWidthScale * 1.15) {
  scale = maxWidthScale * 1.15;
}


    // Apply zoom multiplier and device pixel ratio for sharp rendering
    const dpr = window.devicePixelRatio || 1;
    const finalScale = scale * (zoomMul ?? 1) * dpr;
    const viewport = pdfPage.getViewport({ scale: finalScale });

    canvas.width = viewport.width;
    canvas.height = viewport.height;
    canvas.style.width = `${viewport.width / dpr}px`;
    canvas.style.height = `${viewport.height / dpr}px`;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Cancel any in-flight render on the same canvas before starting a new one.
    if (renderTaskRef.current && typeof renderTaskRef.current.cancel === 'function') {
      try {
        renderTaskRef.current.cancel();
      } catch (e) {
        // noop
      }
      renderTaskRef.current = null;
    }

    const task = pdfPage.render({
      canvasContext: ctx,
      viewport,
    });
    renderTaskRef.current = task;
    try {
      await task.promise;
    } finally {
      // clear ref if it still points to this finished task
      if (renderTaskRef.current === task) renderTaskRef.current = null;
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative flex h-full w-full items-center justify-center"
    >
      <motion.div
  initial={{ opacity: 0, scale: 0.98 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="will-change-transform"
>
  <canvas
    ref={canvasRef}
    className="block bg-white shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
  />
</motion.div>

      {loading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-xs tracking-[0.3em] text-gray-300">
          LOADING…
        </div>
      )}

      {error && !loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-xs tracking-[0.3em] text-red-300">
          FAILED TO LOAD PDF
        </div>
      )}
    </div>
  );
}
