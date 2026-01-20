"use client";

import { BLOGS } from "../content/blogs";

export default function EditorialPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <main className="mx-auto max-w-3xl px-6 py-20 space-y-32">
        {BLOGS.map((blog) => {
          const Component = blog.Component;
          return (
            <section key={blog.id} id={blog.slug} className="scroll-mt-24">
              <Component />
            </section>
          );
        })}
      </main>
    </div>
  );
}
