import Link from "next/link";
import Card from "@/app/Components/Misc/Card";
import { getAllEvents } from "@/app/lib/events";

export default function EventsIndexPage() {
  const events = getAllEvents();

  return (
    <section className="min-h-screen bg-black text-gray-100 py-24 px-10 sm:px-14 md:px-20 lg:px-28 xl:px-36">
      <div className="max-w-5xl mx-auto mb-16">
        <p className="text-sm tracking-[0.18em] text-gray-500 uppercase mb-4">
          © EPSOC EVENTS
        </p>
        <h1 className="text-4xl md:text-6xl font-light mb-4">
          Events <span className="text-gray-500">Archive</span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg font-light max-w-2xl">
          A living catalogue of EPSOC&apos;s institutional engagements across the year.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {events.map((event) => (
          <Link key={event.slug} href={`/events/${event.slug}`}>
            <Card className="h-full cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
                <span className="tracking-[0.18em] uppercase">
                  {event.category}
                </span>
                <span>{event.year}</span>
              </div>

              <h2 className="text-xl md:text-2xl font-light text-gray-100 mb-2">
                {event.title}
              </h2>

              <p className="text-sm text-gray-500 mb-4">{event.subtitle}</p>

              {event.location && (
                <p className="text-xs text-gray-600">{event.location}</p>
              )}
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}