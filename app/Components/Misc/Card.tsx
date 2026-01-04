"use client";

import React from "react";

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Card({ title, children, className = "" }: CardProps) {
  return (
    <div
      className={`
        relative
        rounded-3xl
        px-10 py-8
        bg-[#0b0b0b]
        border border-white/6
        shadow-[0_18px_40px_rgba(0,0,0,0.65)]
        ${className}
      `}
    >
      {/* subtle top light – NOT gloss */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.035] to-transparent" />

      {/* subtle inner depth */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]" />

      {title && (
        <h3 className="mb-6 text-2xl font-light text-gray-300">
          {title}
        </h3>
      )}

      <div className="text-sm md:text-base leading-relaxed text-gray-400 font-light">
        {children}
      </div>
    </div>
  );
}
