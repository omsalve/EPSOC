// app/blogs/[slug]/page.tsx
import React from 'react';
import { notFound } from 'next/navigation';

// 1. Import your blog components
import COTK from '../../content/blogs/cotk';
import EndOfAnEra from '../../content/blogs/endofanera';
import InternalFaultLines from '../../content/blogs/internalfaultlines';
import StackedDecks from '../../content/blogs/stackeddecks';

// 2. Create a mapping object
const blogPosts: { [key: string]: React.FC } = {
  'COTK': COTK,
  'endofanera': EndOfAnEra,
  'internalfaultlines': InternalFaultLines,
  'stackeddecks': StackedDecks,
};

export default function BlogPage({ params }: { params: { slug: string } }) {
  // 3. Find the component based on the URL slug
  const PostComponent = blogPosts[params.slug];

  // 4. Handle invalid URLs (404)
  if (!PostComponent) {
    return notFound();
  }

  // 5. Render the blog post
  return (
    <div className="container mx-auto p-4">
      <PostComponent />
    </div>
  );
}