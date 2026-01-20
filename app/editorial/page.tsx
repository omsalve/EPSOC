"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import Card from "@/app/Components/Misc/Card";
import { BLOGS } from "../content/blogs";

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
};

const cardUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function EditorialPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <main className="mx-auto max-w-6xl px-6 py-20">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light">EPSOC Quarterly — Editorials</h1>
          <p className="mt-4 text-sm text-zinc-400 max-w-2xl">
            Longform analyses and essays. Click any card to open the full article.
          </p>
        </header>

        <motion.section
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {BLOGS.map((blog) => (
            <motion.div key={blog.id} variants={cardUp}>
              <Link href={`/blogs/${blog.slug}`}>
                <Card className="cursor-pointer h-60 flex flex-col justify-between">
                  <div>
                    <span className="inline-block rounded-full px-3 py-1 text-xs text-zinc-400 border border-white/6">
                      {blog.category}
                    </span>

                    <h3 className="mt-4 text-xl font-light text-white leading-snug">
                      {blog.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-sm text-zinc-400">{blog.author}</p>
                    {blog.coverImage && (
                      <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="w-20 h-12 object-cover rounded-md border border-white/6"
                      />
                    )}
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.section>
      </main>
    </div>
  );
}
