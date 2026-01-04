"use client";

import { useState } from "react";
import Card from "@/app/Components/Misc/Card";
import Features from "@/app/Components/Misc/Features";
import Button from "../Misc/Button";

export default function MustReads() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

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
    <section className="relative min-h-screen bg-black text-gray-100 py-20 px-8 md:px-16">
      {/* Header */}
      <header className="flex items-center justify-between mb-20">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-gray-200 text-sm tracking-wider">
            OPEN CALL FOR HOMOECONOMICUS SPECIAL EDITION
          </span>
        </div>

        <div className="flex items-center gap-8">
          <button className="text-gray-300 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </button>

          <button className="flex flex-col gap-1.5 group">
            <span className="w-7 h-0.5 bg-gray-300 group-hover:bg-white" />
            <span className="w-7 h-0.5 bg-gray-300 group-hover:bg-white" />
            <span className="w-7 h-0.5 bg-gray-300 group-hover:bg-white" />
          </button>
        </div>
      </header>

      {/* Title */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-800 rounded-full mb-8">
          <span className="text-xl">©</span>
          <span className="text-gray-400 text-sm tracking-wider">
            Homo Economicus
          </span>
        </div>

        <div className="flex items-end justify-between gap-10">
          <div>
            <h1 className="text-5xl md:text-7xl font-light mb-6">
              Must <span className="text-gray-500">Reads</span>
            </h1>
            <p className="text-gray-400 text-lg font-light max-w-2xl">
              A curated selection of essays, analyses, and long-form work from
              recent publications.
            </p>
          </div>

          <Button className=" md:block px-6 py-3 ">
            Access All
          </Button>
        </div>
      </div>




      {/* Articles */}
      <div className="grid md:grid-cols-2 gap-8">
        {visibleArticles.map((article) => (
          <Card
            key={article.id}
            className="cursor-pointer transition-transform hover:translate-y-[-2px]"
          >
            {/* Icon */}
            <div className="mb-6 w-10 h-10 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>

            <h3 className="text-xl md:text-2xl font-light text-gray-200 mb-3 leading-snug">
              {article.title}
            </h3>

            <p className="text-sm text-gray-500">{article.source}</p>
          </Card>

        ))}
      </div>
            {/* Ambient Category Conveyor */}
      <Features />
    </section>
  );
}
