'use client';

import Card from '@/app/Components/Misc/Card';

export default function ContactUsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid grid-cols-1 gap-20 md:grid-cols-[1fr_1.2fr]">
        
        {/* LEFT SIDE */}
        <div className="space-y-10">
          {/* Tag */}
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1 text-xs text-white/60">
            ● Let’s Connect
          </span>

          {/* Heading */}
          <h1 className="text-5xl font-light leading-tight text-white">
            Let’s Collaborate and
            <br />
            <span className="text-white/50">Begin the work</span>
          </h1>

          <div className="h-px w-full bg-white/10" />

          {/* Marketing Card */}
          <Card className="space-y-4">
            <h3 className="text-lg text-white">Marketing Department</h3>
            <span className="text-xs text-white/50">EPSOC</span>

            <p className="text-sm text-white/60">
              Reach out to the marketing department at EPSOC for any and all
              queries related to events, sponsorships, partnerships, etc.
            </p>
          </Card>

          {/* Book Call */}
          <Card className="flex items-center justify-between">
            <span>Prefer to book a call? </span>
            <button className=" ml-5 rounded-full bg-white px-5 py-2 text-sm font-medium text-black">
              Book a Call
            </button>
          </Card>
        </div>

        {/* RIGHT SIDE – FORM */}
        <Card className="space-y-6 mb-5">
          {/* Name + Email */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs text-white/50">NAME</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl bg-black/40 px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 placeholder:text-white/30 focus:ring-white/30"
              />
            </div>

            <div className="space-y-2 mb-5">
              <label className="text-xs text-white/50">EMAIL</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl bg-black/40 px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 placeholder:text-white/30 focus:ring-white/30"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="space-y-2 mb-5">
            <label className="text-xs text-white/50">PHONE NUMBER</label>
            <input
              type="tel"
              placeholder="+91 0000000000"
              className="w-full rounded-xl bg-black/40 px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 placeholder:text-white/30 focus:ring-white/30"
            />
          </div>

          {/* Category */}
          <div className="space-y-2 mb-5">
            <label className="text-xs text-white/50">QUERY CATEGORY</label>
            <select
              className="w-full rounded-xl bg-black/40 px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-white/30"
            >
              <option className="bg-black">Select</option>
              <option className="bg-black">Magazine Related</option>
              <option className="bg-black">Event Related</option>
              <option className="bg-black">Sponsorship Related</option>
              <option className="bg-black">Other Query</option>
            </select>
          </div>

          {/* Message */}
          <div className="space-y-2 mb-5">
            <label className="text-xs text-white/50 ">MESSAGE</label>
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full resize-none rounded-xl bg-black/40 px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 placeholder:text-white/30 focus:ring-white/30"
            />
          </div>

          {/* Submit */}
          <button className="w-full rounded-full mb-5 bg-gradient-to-b from-white to-white/80 py-3 text-sm font-medium text-black">
            Send Message
          </button>

          <p className="text-center text-xs text-white/40">
            (We will reach out to you within 48hrs)
          </p>
        </Card>
      </div>
    </section>
  );
}
