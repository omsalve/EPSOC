"use client";

import { useState } from "react";
import Link from "next/link";
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
  const volumes = [
    { id: 'vol1', label: 'Vol. I', page: 1, bg: '/images/vol1.jpg' },
    { id: 'vol2', label: 'Vol. II', page: 1, bg: '/images/vol2.jpg' },
  ];

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
              Read <span className="text-gray-500">Homoeconomicus</span>
            </h1>

            <p className="text-gray-400 text-lg font-light max-w-2xl leading-relaxed">
              Access the two volumes of Homoeconomicus. Click a card to open the
              selected volume in the archive.
            </p>
          </motion.div>

          <motion.div variants={titleUp}>
            <Button className="hidden md:block px-6 py-3">Archive</Button>
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
        {volumes.map((vol) => (
          <motion.div key={vol.id} variants={cardUp}>
            <Link href={`/index`}>
              <Card
                className={
                  "h-[360px] flex flex-col cursor-pointer overflow-hidden relative transition-transform hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                }
              >
                <div
                  className="absolute inset-0 bg-center bg-cover"
                  style={{
                    backgroundImage: `url('${vol.bg}')`,
                  }}
                />

                <div className="relative z-10 flex h-full flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <span className="text-sm text-gray-400 tracking-wider mb-2">READ</span>
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-2">{vol.label}</h3>
                  <p className="text-sm text-gray-300">Open the full volume in the archive</p>
                </div>
              </Card>
            </Link>
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
