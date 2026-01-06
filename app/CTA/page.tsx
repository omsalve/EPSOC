'use client';

import { useState } from 'react';
import Card from '@/app/Components/Misc/Card';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactUsPage() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      phone: String(formData.get('phone') || ''),
      category: String(formData.get('category') || ''),
      message: String(formData.get('message') || ''),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('success');
      form.reset();
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message ?? 'Failed to send message.');
    }
  }

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
          <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name + Email */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs text-white/50">NAME</label>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full rounded-xl bg-black/40 px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 placeholder:text-white/30 focus:ring-white/30"
              />
            </div>

            <div className="space-y-2 mb-5">
              <label className="text-xs text-white/50">EMAIL</label>
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full rounded-xl bg-black/40 px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 placeholder:text-white/30 focus:ring-white/30"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="space-y-2 mb-5">
            <label className="text-xs text-white/50">PHONE NUMBER</label>
            <input
              name="phone"
              type="tel"
              placeholder="+91 0000000000"
              className="w-full rounded-xl bg-black/40 px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 placeholder:text-white/30 focus:ring-white/30"
            />
          </div>

          {/* Category */}
          <div className="space-y-2 mb-5">
            <label className="text-xs text-white/50">QUERY CATEGORY</label>
            <select
              name="category"
              className="w-full rounded-xl bg-black/40 px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-white/30"
              defaultValue=""
            >
              <option value="" className="bg-black">Select</option>
              <option value="magazine" className="bg-black">Magazine Related</option>
              <option value="event" className="bg-black">Event Related</option>
              <option value="sponsorship" className="bg-black">Sponsorship Related</option>
              <option value="other" className="bg-black">Other Query</option>
            </select>
          </div>

          {/* Message */}
          <div className="space-y-2 mb-5">
            <label className="text-xs text-white/50 ">MESSAGE</label>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full resize-none rounded-xl bg-black/40 px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 placeholder:text-white/30 focus:ring-white/30"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full rounded-full mb-3 bg-gradient-to-b from-white to-white/80 py-3 text-sm font-medium text-black disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? 'Sending…' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-center text-xs text-emerald-400 mb-2">
              Message sent. We will reach out to you within 48 hours.
            </p>
          )}
          {status === 'error' && (
            <p className="text-center text-xs text-red-400 mb-2">
              {errorMessage || 'Something went wrong. Please try again.'}
            </p>
          )}

          <p className="text-center text-xs text-white/40">
            (We will reach out to you within 48hrs)
          </p>
          </form>
        </Card>
      </div>
    </section>
  );
}
