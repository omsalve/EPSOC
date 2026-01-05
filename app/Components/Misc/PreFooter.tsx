'use client';

import Image from 'next/image';
import Button from '@/app/Components/Misc/Button';
import Indicator from '@/app/Components/Misc/Indicator';
import Link from "next/link";


export default function PreFooter() {
  return (
    <section className="relative  bg-black px-6 md:px-16 pb-32">
      <div
        className="
          relative mx-auto max-w-7xl
          rounded-[28px]
         
          border border-white/10
          overflow-hidden
        "
      >
        {/* Subtle inner glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 p-12 md:p-20">
          
          {/* LEFT */}
          <div className="space-y-10">
            
            <Indicator>
              Let&apos;s Connect
            </Indicator>

            <h1 className="text-5xl md:text-6xl font-light leading-tight">
              Let&apos;s Grow <br />
              <span className="text-white/50">Together</span>
            </h1>

            <div className="space-y-8 max-w-md">
              
              <div className="border-t border-white/10 pt-6">
                <h4 className="text-lg font-medium mb-2">
                  Sponsorships
                </h4>
                <p className="text-sm text-white/50 leading-relaxed">
                  For outreach and publicity at our various events, and in our
                  widely published magazine ‘Homo Economicus’.
                </p>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h4 className="text-lg font-medium mb-2">
                  Guest Invites
                </h4>
                <p className="text-sm text-white/50 leading-relaxed">
                  For organising guest talks, panel discussions, publishing of
                  research in our magazine.
                </p>
              </div>

            </div>

            <div className="flex gap-4 pt-4">
              <Button variant="secondary">
                See All Events
              </Button>

<Link href="/CTA">
  <Button variant="primary">
    Contact Us
  </Button>
</Link>

            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-center">
            <div
              className="
                relative w-full max-w-md
                rounded-2xl
                overflow-hidden
                border border-white/10
                shadow-2xl
              "
            >
              <Image
                src="/image.png" // replace with your image
                alt="EPSOC"
                width={800}
                height={600}
                className="object-cover grayscale"
              />

              {/* Soft overlay */}
              <div className="absolute inset-0 bg-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
