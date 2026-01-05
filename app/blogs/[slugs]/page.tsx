// app/blogs/[slugs]/page.tsx
import React from 'react';
import { notFound } from 'next/navigation';

// Import blog post components
import COTK from '../../content/blogs/COTK';
import EndOfAnEra from '../../content/blogs/endofanera';
import InternalFaultLines from '../../content/blogs/internalfaultlines';
import StackedDecks from '../../content/blogs/stackeddecks';

// Map URL slugs to components
const blogPosts: { [key: string]: React.FC } = {
  COTK: COTK,
  endofanera: EndOfAnEra,
  internalfaultlines: InternalFaultLines,
  stackeddecks: StackedDecks,
};

// Accept either `slug` or `slugs` and handle async params per Next 15
export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug?: string; slugs?: string }>;
}) {
  const resolved = await params;
  const slug = resolved.slugs ?? resolved.slug ?? "";
  const PostComponent = blogPosts[slug];

  if (!PostComponent) {
    return notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <PostComponent />
    </div>
  );
}

// (Optional) pre-generate static paths for known posts
export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slugs: slug }));
}
