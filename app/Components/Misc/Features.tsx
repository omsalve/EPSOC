"use client";

import {
  TrendingUp,
  Globe,
  BarChart3,
  Briefcase,
  Landmark,
} from "lucide-react";

const features = [
  { label: "Economics", icon: TrendingUp },
  { label: "Foreign Relations", icon: Globe },
  { label: "Finance", icon: BarChart3 },
  { label: "Entrepreneurship", icon: Briefcase },
  { label: "Politics", icon: Landmark },
];

export default function Features() {
  return (
    <div className="relative w-full overflow-hidden py-10 bg-black">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="flex w-max animate-marquee gap-6">
        {[...features, ...features].map((feature, i) => (
          <FeaturePill key={i} {...feature} />
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
      `}</style>
    </div>
  );
}

function FeaturePill({
  label,
  icon: Icon,
}: {
  label: string;
  icon: React.ElementType;
}) {
  return (
    <div
      className="
        flex items-center gap-3
        px-6 py-3
        rounded-full
        bg-[#0b0b0b]
        border border-white/5
        shadow-[0_10px_25px_rgba(0,0,0,0.6)]
        text-gray-300
        whitespace-nowrap
      "
    >
      <Icon className="h-4 w-4 text-gray-400" strokeWidth={1.5} />
      <span className="text-sm font-light tracking-wide">{label}</span>
    </div>
  );
}
