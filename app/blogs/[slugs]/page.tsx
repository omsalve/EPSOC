// app/blogs/[slug]/page.tsx
import { notFound } from "next/navigation";
import { BLOGS } from "../../content/blogs";

export default function BlogPage({
  params,
}: {
  params: { slugs: string };
}) {
  const blog = BLOGS.find((b) => b.slug === params.slugs);

  if (!blog) {
    notFound();
  }

  const PostComponent = blog.Component;

  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <PostComponent />
    </section>
  );
}
