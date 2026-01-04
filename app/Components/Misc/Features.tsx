"use client";

const features = [
  { label: "Economics", icon: "⚡" },
  { label: "Foreign Relations", icon: "🔍" },
  { label: "Finance", icon: "💹" },
  { label: "Entrepreneurship", icon: "📊" },
  { label: "Politics", icon: "📰" },
];

export default function Features() {
  return (
    <div className="relative w-full overflow-hidden py-10 bg-black">
      {/* fade edges */}
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
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}

function FeaturePill({
  label,
  icon,
}: {
  label: string;
  icon: string;
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
      <span className="text-lg">{icon}</span>
      <span className="text-sm font-light">{label}</span>
    </div>
  );
}
