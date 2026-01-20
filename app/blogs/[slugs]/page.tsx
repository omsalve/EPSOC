// app/blogs/[slug]/page.tsx
import { notFound } from "next/navigation";
import { BLOGS } from "../../content/blogs";

export default async function BlogPage({ params }: { params: { slugs: string } }) {
  const { slugs } = await params;
  const slugParam = slugs ?? "";

  const blog =
    BLOGS.find((b) => b.slug === slugParam) ||
    BLOGS.find((b) => b.slug.toLowerCase() === slugParam.toLowerCase());

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
