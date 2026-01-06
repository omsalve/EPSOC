export function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-sm md:text-base text-white/60">
      {children}
    </p>
  );
}

export function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-base md:text-lg text-white/80">
      {children}
    </p>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 mt-10 text-lg font-medium text-white">
      {children}
    </h2>
  );
}

export function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="mb-5 border-l-2 border-white/20 pl-6 italic text-white/50">
      {children}
    </blockquote>
  );
}

export function Divider() {
  return (
    <div className="flex justify-center py-8 text-white/30 tracking-widest">
      * * *
    </div>
  );
}
