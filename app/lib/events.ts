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
  {
    slug: "city-youth-parliament",
    title: "Mumbai Youth Parliament",
    subtitle: "A city-wide forum on economics, politics, and urban governance.",
    category: "Flagship Event",
    year: "2025",
    location: "Mumbai",
  },
  {
    slug: "policy-roundtable",
    title: "Policy Roundtable Series",
    subtitle: "Closed-door discussions with practitioners and faculty.",
    category: "Roundtable",
    year: "2025",
    location: "Campus",
  },
];

export function getEvent(slug: string): EventMeta | null {
  return events.find((e) => e.slug === slug) ?? null;
}

export function getAllEvents(): EventMeta[] {
  return events;
}