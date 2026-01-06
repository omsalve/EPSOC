"use client";

import { useEffect, useRef, useState } from "react";
import { BLOGS } from "../content/blogs";
import clsx from "clsx";

export default function EditorialPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  /* -------------------- VIEWPORT CHECK -------------------- */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* -------------------- INTERSECTION OBSERVER -------------------- */
  useEffect(() => {
    if (isMobile) {
      observerRef.current?.disconnect();
      observerRef.current = null;
      return;
    }

    observerRef.current?.disconnect();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = Number(entry.target.getAttribute("data-index"));
          if (Number.isNaN(index)) return;

          setActiveIndex(index);

          const blog = BLOGS[index];
          if (blog) {
            history.replaceState(null, "", `#${blog.slug}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "-35% 0px -35% 0px", // middle-band detection
        threshold: 0,
      }
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));
    observerRef.current = observer;

    return () => observer.disconnect();
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
    <div className="relative min-h-screen text-zinc-100 overflow-x-hidden">
      
      {/* ===== FIXED BACKGROUND ===== */}
      <div className="fixed inset-0 -z-10 h-screen w-screen">
        {BLOGS.map((blog, i) => (
          <div
            key={blog.id}
            className={clsx(
              "absolute inset-0 h-screen w-screen bg-cover bg-center transition-opacity duration-[900ms] ease-out",
              i === activeIndex ? "opacity-100" : "opacity-0"
            )}
            style={{ backgroundImage: `url(${blog.coverImage})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="grid grid-cols-[40vw_60vw] min-h-screen">
        
        {/* ===== LEFT PANEL ===== */}
        <aside className="sticky top-0 h-screen px-12">
  <div className="relative h-full">
    
    {/* Anchor point */}
    <div className="absolute bottom-24 left-0 right-0">
      {BLOGS.map((blog, i) => (
        <div
          key={blog.id}
          className={clsx(
            "absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(.22,1,.36,1)]",
            i === activeIndex
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          )}
        >
          <span className="text-xs uppercase tracking-[0.25em] text-zinc-400">
            {blog.category}
          </span>

          <h1 className="mt-4 text-5xl font-light leading-tight text-zinc-50">
            {blog.title}
          </h1>

          <p className="mt-3 text-sm text-zinc-400">
            {blog.author}
          </p>

          <div className="mt-8 h-px w-24 bg-zinc-700" />
        </div>
      ))}
    </div>

  </div>
</aside>


        {/* ===== RIGHT PANEL ===== */}
        <main className="space-y-0">
          {BLOGS.map((blog, index) => {
            const Component = blog.Component;

            return (
              <section
                key={blog.id}
                id={blog.slug}
                ref={(el) => {
  sectionRefs.current[index] = el;
}}

                data-index={index}
                className="min-h-screen flex items-center px-10 scroll-mt-32"
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
