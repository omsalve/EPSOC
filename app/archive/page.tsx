import React, { Suspense } from 'react';
import PDFStage from '../Components/PDF/PDFstage';

export default function ArchivePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-gray-400">
          Loading archive…
        </div>
      }
    >
      <PDFStage />
    </Suspense>
  );
}
