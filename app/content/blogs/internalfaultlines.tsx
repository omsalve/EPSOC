'use client';

import Card from '@/app/Components/Misc/Card';

export default function InternalFaultLines() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      
      {/* HEADER */}
      <header className="mb-16 space-y-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1 text-xs text-white/60">
          ● Editorial · India · Governance
        </span>

        <h1 className="text-4xl md:text-5xl font-light leading-tight text-white">
          Internal Faultlines: Migration, Water Wars, and
          <br />
          <span className="text-white/50">
            the Crisis of Federal Governance in India
          </span>
        </h1>

        <p className="text-sm text-white/50">
          Kannan Agrawal
        </p>

        <div className="h-px w-full bg-white/10" />
      </header>

      {/* ARTICLE BODY */}
      <Card className="leading-relaxed">
        
        {/* INTRO */}
        <p className="mb-5 text-base md:text-lg text-white/80">
          In a class that was otherwise filled with debate on the US–China trade
          war, de-dollarization, and BRICS expansion, I couldn’t help but pose
          this question to myself: what if India’s biggest geopolitical
          conundrums were not in global boardrooms or the Line of Actual Control
          — but in its own backyard?
        </p>

        <p className="mb-5 text-sm md:text-base text-white/60">
          This article consciously turns the lens inwards, to two profoundly
          Indian issues that rarely make it into mainstream international
          relations discourse: inter-state migration and inter-state water
          conflicts. These might not have fighter aircraft or trade embargoes,
          but they show deep tensions in India’s federal system — tensions that,
          as outlined by Raveesh, might determine the nation’s future stability
          far more than traditional foreign threats.
        </p>

        {/* SECTION: MIGRATION */}
        <h2 className="mb-5 mt-10 text-lg font-medium text-white">
          Migration and the Quiet Crisis of Urban India
        </h2>

        <p className="mb-5 text-sm md:text-base text-white/60">
          India’s story of urban expansion is indistinguishable from that of its
          domestic migration patterns. Approximately 37% of India’s workforce
          are internal migrants, as stated by the 2022 Economic Survey. They are
          mostly workers from Uttar Pradesh, Bihar, Odisha, and West Bengal,
          keeping the economic wheels of urban centres such as Delhi, Mumbai,
          Bengaluru, and Chennai rolling.
        </p>

        <p className="mb-5 text-sm md:text-base text-white/60">
          But the socio-political reaction to this mobility has turned sharply
          post-COVID. Following Raveesh’s theoretical definition of
          securitization, in which non-conventional problems such as migration
          are re-characterised as threats, Indian states are increasingly
          portraying migrants as security liabilities.
        </p>

        <p className="mb-5 text-sm md:text-base text-white/60">
          Political rhetoric from Maharashtra, particularly the narrative around
          “outsiders,” has fueled cultural suspicion. Migrants are frequently
          framed as economic menaces, despite being the backbone of urban labour
          markets.
        </p>

        <p className="mb-5 text-sm md:text-base text-white/60">
          This securitization is being converted into policy. Haryana and other
          states have introduced legislation reserving a percentage of private
          sector jobs for locals. Migrants are still under-documented and
          underserved despite initiatives such as One Nation, One Ration Card
          (ONORC) and e-Shram.
        </p>

        <p className="mb-5 text-sm md:text-base text-white/60">
          The impact is visible on the ground. Bengaluru, for instance, struggles
          with housing stress, infrastructure overload, and transport
          bottlenecks. Similar strains are visible in Mumbai and Delhi. Migration
          is treated as a threat to be managed, rather than a structural reality
          to be planned for.
        </p>

        {/* SECTION: WATER */}
        <h2 className="mb-5 mt-10 text-lg font-medium text-white">
          Water Disputes: Rivers as Faultlines
        </h2>

        <p className="mb-5 text-sm md:text-base text-white/60">
          While migration reveals social fault lines, water conflicts emphasise
          India’s federal system’s ecological and territorial vulnerabilities.
          Since most Indian rivers traverse several states, both natural
          endowment and political bargaining determine access.
        </p>

        <p className="mb-5 text-sm md:text-base text-white/60">
          The Cauvery dispute between Karnataka and Tamil Nadu flared again in
          2023, driven by poor monsoon conditions and agricultural distress.
          Despite Supreme Court rulings, enforcement remains politically
          contentious, exposing the limits of judicial authority in federal
          disputes.
        </p>

        <p className="mb-5 text-sm md:text-base text-white/60">
          In June 2025, fresh protests broke out against dam construction on
          Brahmaputra tributaries. China’s upstream projects further complicate
          India’s water security calculus, adding a geopolitical layer to
          internal ecological stress.
        </p>

        <p className="mb-5 text-sm md:text-base text-white/60">
          The common thread is clear: when essential resources become
          securitized, cooperation almost always fails. Trust breaks down, and
          short-term political advantage takes precedence over long-term
          sustainability.
        </p>

        {/* CONCLUSION */}
        <h2 className="mb-5 mt-10 text-lg font-medium text-white">
          Conclusion: Securing Unity Beyond Borders
        </h2>

        <p className="mb-5 text-sm md:text-base text-white/60">
          India’s geopolitical importance does not reside in alliances or
          military preparedness alone. As Raveesh reminds us, geopolitics also
          encompasses the management of people, resources, and territory within
          borders.
        </p>

        <p className="mb-5 text-sm md:text-base text-white/60">
          Instead of viewing migration as an issue to be contained and water as
          a tool to intimidate, India must shift towards cooperative federalism.
          This involves depoliticizing migration, decentralizing water
          management, strengthening inter-state institutions, and ensuring that
          economic growth does not come at the expense of human dignity or
          ecological disaster.
        </p>

      </Card>

      {/* FOOTER */}
      <footer className="mt-20 text-center text-xs text-white/40">
        © EPSOC · Longform Editorial
      </footer>

    </section>
  );
}
