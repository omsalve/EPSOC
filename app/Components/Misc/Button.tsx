"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "relative px-8 py-3 font-mono text-sm tracking-wide rounded-full transition-all duration-300 active:scale-[0.98]";

  const variants = {
    primary: `
      text-gray-200
      bg-gradient-to-b from-zinc-800 via-zinc-900 to-black
      shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_25px_rgba(0,0,0,0.6)]
      hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_14px_35px_rgba(0,0,0,0.8)]
      border border-zinc-800
    `,
    secondary: `
      text-gray-300
      bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900
      shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_8px_20px_rgba(0,0,0,0.5)]
      border border-gray-700
    `,
    outline: `
      text-gray-300
      bg-transparent
      border border-zinc-700
      hover:bg-zinc-900
      shadow-[0_6px_18px_rgba(0,0,0,0.4)]
    `,
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {/* subtle top gloss */}
      <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent" />
      <span className="relative z-10">{children}</span>
    </button>
  );
}
