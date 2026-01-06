import React from "react";
import { notFound } from "next/navigation";
import { getAllEvents } from "@/app/lib/events";

// Import event article components
import andheriwestshitposting from "@/app/content/events/andheriwestshitposting";
import CityYouthParliamentEvent from "@/app/content/events/city-youth-parliament";
import PolicyRoundtableEvent from "@/app/content/events/policy-roundtable";

const eventPosts: { [key: string]: React.FC } = {
  andheriwestshitposting: andheriwestshitposting,
  "city-youth-parliament": CityYouthParliamentEvent,
  "policy-roundtable": PolicyRoundtableEvent,
};

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const PostComponent = eventPosts[slug];

  if (!PostComponent) {
    return notFound();
  }

  return (
    <section className="min-h-screen bg-black text-gray-100 py-24 px-10 sm:px-14 md:px-20 lg:px-28 xl:px-36">
      <div className=" mx-auto">
        <PostComponent />
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return getAllEvents().map((event) => ({ slug: event.slug }));
}
