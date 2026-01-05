'use client';

import Card from '@/app/Components/Misc/Card';

export default function StackedDecksAndShatteredChips() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      
      {/* HEADER */}
      <header className="mb-16 space-y-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1 text-xs text-white/60">
          ● Editorial · Geopolitics
        </span>

        <h1 className="text-4xl md:text-5xl font-light leading-tight text-white">
          Stacked Decks and Shattered Chips:
          <br />
          <span className="text-white/50">The Taiwan Strait Gamble</span>
        </h1>

        <p className="text-sm text-white/50">
          Chaitanya Harikrishna
        </p>

        <div className="h-px w-full bg-white/10" />
      </header>

      {/* ARTICLE BODY */}
      <Card className="space-y-10 leading-relaxed">
        
        {/* LEAD */}
        <p className="mb-5 text-base md:text-lg text-white/80">
          We live in a world powered by thinking stones and unthinking men. In a
          world increasingly defined by invisible circuits and digital
          dependencies, Taiwan stands as the irreplaceable center of gravity.
        </p>

        {/* BODY */}
        <p className=" mb-5 text-sm md:text-base text-white/60">
          The island is home to one of the greatest semiconductor ecosystems in
          the world, controlling over 60% of global semiconductor manufacturing
          and over 90% of the world’s most advanced chips. Taiwan is not merely a
          player — it is the linchpin of global technological activity.
        </p>

        <p className="mb-5 text-sm md:text-base text-white/60">
          Its most dominant chip foundry, the Taiwan Semiconductor Manufacturing
          Company (TSMC), supplies critical components to global giants such as
          Apple, Google, and NVIDIA. But beneath this triumph lies a fault line —
          subtle yet widening — between not just what Taiwan is doing, but what
          it once believed were its strategic partners.
        </p>

        <p className="mb-5 text-sm md:text-base text-white/60">
          In recent months, Taiwan’s skies have been anything but calm. In the
          last week itself, Taiwan recorded heightened Chinese military activity
          around its territory — with over 70 aircraft, 15 vessels, and 4 ships
          detected operating near the island.
        </p>

        {/* PULL QUOTE */}
        <blockquote className="mb-5 border-l-2 border-white/20 pl-6 italic text-white/50">
          Taiwan may be exposed not only to an adversary, but to the shifting
          posture of the United States.
        </blockquote>

        {/* BODY CONTINUED */}
        <p className="mb-5 text-sm md:text-base text-white/60">
          Taiwan has long leaned on its “Silicon Shield,” the idea that its
          sovereignty would not be threatened given its tight grip over the
          global semiconductor supply chain.
        </p>

        <p className="mb-5 text-sm md:text-base text-white/60">
          This shield works if the grip on the supply chain remains intact.
          TSMC has pledged to invest $100 billion into U.S. manufacturing
          facilities — a move meant to diversify production, but one that also
          quietly dilutes Taiwan’s leverage.
        </p>

        <p className="mb-5 text-sm md:text-base text-white/70">
          No amount of innovation can compensate for a loss of trust in its most
          powerful ally.
        </p>

        {/* DIVIDER */}
        <div className="mb-5 flex justify-center py-8 text-white/30 tracking-widest">
          * * *
        </div>

        {/* FINAL SECTION */}
        <p className="mb-5 text-sm md:text-base text-white/60">
          Meanwhile, America’s own chip renaissance faces bottlenecks — delays,
          regulatory hurdles, and a shortage of specialized engineers. Despite
          billions in subsidies, the U.S. remains heavily reliant on East Asian
          know-how.
        </p>

        <p className="mb-5 text-sm md:text-base text-white/60">
          Although it sounds like all is well in chipland, Taipei must continue
          to have a foot on the gas. The consequences of a weakened Taiwan are not
          regional — they are global.
        </p>

        <p className="mb-5 text-sm md:text-base text-white/70">
          The world cannot afford to let Taiwan become the next cautionary tale
          of strategic irrelevance. And in a world built on silicon and paranoia,
          paranoia may be the last safeguard against catastrophe.
        </p>

      </Card>

      {/* FOOTER */}
      <footer className="mt-20 text-center text-xs text-white/40">
        © EPSOC · Longform Editorial
      </footer>

    </section>
  );
}
