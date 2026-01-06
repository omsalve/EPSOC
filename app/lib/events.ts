export type EventSlug =
  | "andheriwestshitposting"
  | "city-youth-parliament"
  | "policy-roundtable";

export interface EventMeta {
  slug: EventSlug;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  location?: string;
}

export const events: EventMeta[] = [
  {
    slug: "andheriwestshitposting",
    title: "EPSOC × andheriwestshitposting",
    subtitle: "On contemporary finance, internet culture, and institutional responsibility.",
    category: "Guest Session",
    year: "2025",
    location: "SAMSOE, NMIMS Mumbai",
  },
 
];

export function getEvent(slug: string): EventMeta | null {
  return events.find((e) => e.slug === slug) ?? null;
}

export function getAllEvents(): EventMeta[] {
  return events;
}