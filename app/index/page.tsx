"use client";

import LiquidEther from '@/app/Components/Background/LiquidEther';
import Link from "next/link";
import Card from "../Components/Misc/Card";

import vol1 from "@/app/data/articles/articles.vol1.json";
import vol2 from "@/app/data/articles/articles.vol2.json";

type Article = {
  id: string | number;
  volume: string;
  page: number;
  title: string;
  author?: string;
};

const vol1Articles: Article[] = vol1 as unknown as Article[];
const vol2Articles: Article[] = vol2 as unknown as Article[];

export default function IndexPage() {
  return (
    <section className="min-h-screen bg-black text-gray-100 py-24">

      {/* -------------------- Background -------------------- */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <LiquidEther
      colors={['#FFFFFF', '#D1D1D1', '#8A8A8A']}
      mouseForce={8}          // softer than Hero (content page)
      cursorSize={100}
      isViscous={false}
      resolution={0.35}
      autoDemo
      autoSpeed={0.2}
      autoIntensity={1.1}
      takeoverDuration={0.3}
      autoResumeDelay={5000}
      autoRampDuration={0.8}
    />

    {/* Editorial veil (same logic as Hero) */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
  </div>
  
      <div className="px-[30px]">
        <div className="grid grid-cols-2 gap-x-[30px]">

          {/* ================= VOL I ================= */}
          <div className="flex flex-col">
            <h2 className="mb-8 text-[11px] tracking-[0.4em] text-gray-500 uppercase">
              Volume I
            </h2>

            <div className="flex flex-col gap-3">
              {vol1Articles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          {/* ================= VOL II ================= */}
          <div className="flex flex-col">
            <h2 className="mb-8 text-[11px] tracking-[0.4em] text-gray-500 uppercase">
              Volume II
            </h2>

            <div className="flex flex-col gap-3">
              {vol2Articles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* -------------------- Card -------------------- */

function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/archive?vol=${article.volume}&page=${article.page}`}
      className="group"
    >
      <Card
        className="
          p-5
          min-h-[96px]
          border border-white/5
          bg-white/[0.015]
          transition
          hover:bg-white/[0.04]
          hover:border-white/10
        "
      >
        <h3
          className="
            text-[15px]
            font-light
            leading-snug
            text-gray-200
            transition
            group-hover:text-white
            line-clamp-2
          "
        >
          {article.title}
        </h3>

        {article.author && (
          <p
            className="
              mt-1
              text-[12px]
              tracking-wide
              text-gray-500
              line-clamp-1
            "
          >
            {article.author}
          </p>
        )}
      </Card>
    </Link>
  );
}
