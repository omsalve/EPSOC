'use client';

import { useEffect, useRef, useState } from 'react';

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
}: PDFReaderProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pdfDocRef = useRef<any>(null);

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

        await renderPage(doc, page);
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
    };
  }, [fileUrl, onPages]);

  useEffect(() => {
    if (!pdfDocRef.current) return;
    renderPage(pdfDocRef.current, page);
  }, [page]);

  async function renderPage(doc: any, pageNum: number) {
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


    const viewport = pdfPage.getViewport({ scale });

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    await pdfPage.render({
      canvasContext: ctx,
      viewport,
    }).promise;
  }

  return (
    <div
      ref={containerRef}
      className="relative flex h-full w-full items-center justify-center"
    >
      <canvas
        ref={canvasRef}
        className="block bg-white shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
      />

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
