"use client";

import LiquidEther from "@/app/Components/Background/LiquidEther";
import Button from "../Misc/Button";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* 🔮 LiquidEther Background */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={["#FFFFFF", "#C9C9C9", "#808080",]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* 🌑 Dark matte overlay (important for readability) */}
      <div className="absolute inset-0 z-[1] bg-black/50" />

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-8 md:px-16 py-6">
        <div className="flex items-center gap-3 animate-fade-in">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-gray-200 text-sm md:text-base font-light tracking-wider">
            OPEN CALL FOR HOMOECONOM
          </span>
        </div>

        <div className="flex items-center gap-8">
          <button className="text-gray-300 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </button>

          <button className="flex flex-col gap-1.5 group">
            <span className="w-7 h-0.5 bg-gray-300 group-hover:bg-white" />
            <span className="w-7 h-0.5 bg-gray-300 group-hover:bg-white" />
            <span className="w-7 h-0.5 bg-gray-300 group-hover:bg-white" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-between h-[calc(100vh-120px)] px-8 md:px-16">
        {/* Left */}
        <div className="max-w-xl space-y-8 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-light text-gray-100 leading-tight">
            Economic & Political Society
          </h1>

          <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light">
            A polity, a union of spirited individuals, driven not only by notions
            of greatness and achievement, but also humility and relevance. A
            conduit for the passions of the average Sarla Anil Modi School of
            Economics’ homo economicus.
          </p>

          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <span className="text-xl">©</span>
            <span>EST. 2025</span>
          </div>

          <Button variant="primary">
            Executive Council Results
          </Button>
        </div>

        {/* Right Logo */}
        <div className="hidden md:flex items-center justify-center animate-rotate-slow">
          <div className="relative w-80 h-80 rounded-full border border-gray-800 flex items-center justify-center">
            <div className="w-72 h-72 rounded-full border-2 border-gray-700 flex items-center justify-center backdrop-blur-sm bg-black/30">
              <span className="text-gray-600 text-sm text-center px-8">
                [SAMEPS LOGO]
              </span>
            </div>
            <div className="absolute inset-0 rounded-full border-t-2 border-gray-600 animate-spin-slow opacity-30" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce-slow">
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
