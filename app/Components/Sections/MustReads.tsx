"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Card from "@/app/Components/Misc/Card";
import Features from "@/app/Components/Misc/Features";
import Button from "../Misc/Button";
import Indicator from "../Misc/Indicator";

/* -------------------- Motion DNA -------------------- */

const ease = [0.22, 1, 0.36, 1] as const;

const sectionFade: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.2, ease },
  },
};

const titleUp: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease },
  },
};

const grid: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4,
    },
  },
};

const cardUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

export default function MustReads() {
  const [activeFilter] = useState<string>("all");

  const articles = [
    {
      id: 1,
      title: "The End of an Era: America's Iron Curtain on Globalisation",
      source: "Ceteris Paribus | ed.1 Spotlight",
      category: "economics",
    },
    {
      id: 2,
      title: "Stacked Decks and Shattered Chips: The Taiwan Strait Gamble",
      source: "Homoeconomicus | Geopolitical Special Ed.",
      category: "foreign-relations",
    },
    {
      id: 3,
      title:
        "Internal Faultlines: Migration, Water Wars, and the Crisis of Federal Governance in India",
      source: "Homoeconomicus | Geopolitical Special Ed.",
      category: "politics",
    },
    {
      id: 4,
      title:
        "Do we underestimate the challenges of taking knowledge out of its original context and transferring it to a different context?",
      source: "Ceteris Paribus | ed.1 Spotlight",
      category: "economics",
    },
  ];

  const visibleArticles =
    activeFilter === "all"
      ? articles
      : articles.filter((a) => a.category === activeFilter);

  return (
    <motion.section
      variants={sectionFade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      className="relative min-h-screen bg-black text-gray-100 py-28 px-10 sm:px-14 md:px-20 lg:px-28 xl:px-36"

    >
      {/* -------------------- Header -------------------- */}
      <motion.div variants={grid} className="mb-20">
        <motion.div variants={titleUp}>
          <Indicator className="inline-flex items-center gap-2 px-4 py-2 border border-gray-800 rounded-full mb-10">
            <span className="text-gray-400 text-sm tracking-widest">
              © Homo Economicus
            </span>
          </Indicator>
        </motion.div>

        <div className="flex items-end justify-between gap-12">
          <motion.div variants={titleUp}>
            <h1 className="text-5xl md:text-7xl font-light mb-6">
              Must <span className="text-gray-500">Reads</span>
            </h1>

            <p className="text-gray-400 text-lg font-light max-w-2xl leading-relaxed">
              A deliberately curated selection of essays, analyses, and long-form
              work drawn from our most recent publications.
            </p>
          </motion.div>

          <motion.div variants={titleUp}>
            <Button className="hidden md:block px-6 py-3">
              Access All
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* -------------------- Articles -------------------- */}
      <motion.div
        variants={grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8"
      >
        {visibleArticles.map((article) => (
          <motion.div key={article.id} variants={cardUp}>
<Card className="
  h-[320px]
  flex flex-col
  cursor-pointer
  transition-transform
  hover:-translate-y-1
  hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]
">
              <div className="mb-0 w-10 h-10 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.6}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>

              <h3 className="text-xl md:text-2xl font-light text-gray-200 mb-3 leading-snug">
                {article.title}
              </h3>

              <p className="text-sm text-gray-500 tracking-wide">
                {article.source}
              </p>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* -------------------- Ambient Conveyor -------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease }}
        viewport={{ once: true }}
        className="mt-10"
      >
        <Features />
      </motion.div>
    </motion.section>
  );
}
