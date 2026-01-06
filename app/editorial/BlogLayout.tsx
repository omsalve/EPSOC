"use client";

import Card from "@/app/Components/Misc/Card";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="space-y-12">
      <Card className="leading-relaxed">
        {children}
      </Card>

      <footer className="pt-12 text-center text-xs text-white/40">
        © EPSOC · Longform Editorial
      </footer>
    </article>
  );
}
