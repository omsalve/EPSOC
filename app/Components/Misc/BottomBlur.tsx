'use client';

export default function BottomBlur() {
  return (
    <div
      className="pointer-events-none fixed bottom-0 left-0 z-40 w-full"
      style={{
        height: '10vh',

        backdropFilter: 'blur(28px)',
        WebkitBackdropFilter: 'blur(28px)',

        background:
          'linear-gradient(to top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 35%, rgba(0,0,0,0.12) 55%, rgba(0,0,0,0) 100%)',

        WebkitMaskImage:
          'linear-gradient(to top, black 0%, black 30%, rgba(0,0,0,0.6) 50%, transparent 85%)',
        maskImage:
          'linear-gradient(to top, black 0%, black 30%, rgba(0,0,0,0.6) 50%, transparent 85%)',

        WebkitMaskSize: '100% 100%',
        maskSize: '100% 100%',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
      }}
    />
  );
}
