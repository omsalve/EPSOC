"use client";

import { useEffect, useRef, useState } from "react";
import { BLOGS } from "../content/blogs";

export default function EditorialPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const rightBlockRef = useRef<HTMLDivElement | null>(null);

  /* -------------------- VIEWPORT CHECK -------------------- */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* -------------------- DESKTOP SCROLL SYNC -------------------- */
  useEffect(() => {
    if (isMobile) return;

    const rightBlock = rightBlockRef.current;
    if (!rightBlock) return;

    const handleScroll = () => {
      const sections = rightBlock.querySelectorAll<HTMLElement>(".article-section");
      if (!sections.length) return;

      const containerRect = rightBlock.getBoundingClientRect();
      const containerCenter = containerRect.top + containerRect.height / 2;

      let bestIndex = 0;
      let smallestDistance = Infinity;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - containerCenter);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          bestIndex = index;
        }
      });

      setActiveIndex(bestIndex);
      const blog = BLOGS[bestIndex];
      if (blog) {
        history.replaceState(null, "", `#${blog.slug}`);
      }
    };

    rightBlock.addEventListener("scroll", handleScroll);
    // Initial sync on mount
    handleScroll();

    return () => {
      rightBlock.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  /* -------------------- HASH SCROLL -------------------- */
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const target = document.getElementById(hash);
    target?.scrollIntoView({ behavior: "auto", block: "start" });
  }, []);

  const activeBlog = BLOGS[activeIndex];

  /* -------------------- MOBILE LAYOUT -------------------- */
  if (isMobile) {
    return (
      <div className="min-h-screen bg-black text-zinc-100">
        <main className="mx-auto max-w-3xl px-6 py-20 space-y-32">
          {BLOGS.map((blog) => {
            const Component = blog.Component;
            return (
              <section
                key={blog.id}
                id={blog.slug}
                className="scroll-mt-24"
              >
                <Component />
              </section>
            );
          })}
        </main>
      </div>
    );
  }

  /* -------------------- DESKTOP EDITORIAL -------------------- */

  return (
    <div className="flex h-screen overflow-hidden bg-black text-zinc-100">
      {/* LEFT PANEL: Active article background + meta */}
      <div
        className="w-2/5 relative flex items-center justify-center transition-all duration-700"
        style={{
          backgroundImage: activeBlog ? `url(${activeBlog.coverImage})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        {activeBlog && (
          <div className="relative z-10 px-10">
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-400">
              {activeBlog.category}
            </span>
            <h1 className="mt-4 text-4xl lg:text-5xl font-light leading-tight text-zinc-50">
              {activeBlog.title}
            </h1>
            <p className="mt-4 text-sm text-zinc-300">
              {activeBlog.author}
            </p>
          </div>
        )}
      </div>

      {/* RIGHT PANEL: Scrollable articles */}
      <div
        ref={rightBlockRef}
        className="w-3/5 h-screen overflow-y-scroll bg-black/95"
      >
        <main className="px-10 py-20 space-y-0">
          {BLOGS.map((blog, index) => {
            const Component = blog.Component;

            return (
              <section
                key={blog.id}
                id={blog.slug}
                data-index={index}
                className="article-section min-h-screen flex items-center"
              >
                <div className="mx-auto max-w-3xl w-full">
                  <Component />
                </div>
              </section>
            );
          })}
        </main>
      </div>
    </div>
  );
}
