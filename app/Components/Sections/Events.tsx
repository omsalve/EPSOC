"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import Button from "../Misc/Button";

/* -------------------- Motion DNA -------------------- */

const ease = [0.22, 1, 0.36, 1] as const;

const section: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.2, ease },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

export default function Events() {
  return (
    <motion.section
      variants={section}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      className="relative min-h-screen bg-black text-gray-100 py-28 px-10 sm:px-14 md:px-20 lg:px-28 xl:px-36"

    >
      

      {/* -------------------- Title -------------------- */}
      <motion.div variants={stagger} className="mb-20">
        <motion.div variants={fadeUp} className="mb-6">
          <span className="text-gray-500 text-sm tracking-widest">
            © EPSOC EVENTS
          </span>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex items-end justify-between gap-12"
        >
          <div>
            <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
              Recent <span className="text-gray-500">Events</span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg font-light">
              A considered record of our most recent institutional engagements.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/events">
              <Button className="px-6 py-3 text-gray-300 hover:text-white font-light text-sm">
                See All Events
              </Button>
            </Link>
            <Link href="/CTA">
              <Button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-full font-light">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* -------------------- Event Card -------------------- */}
      <motion.div
        variants={fadeUp}
        className="max-w-2xl"
      >
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.4, ease }}
          className="group relative bg-zinc-950 border border-zinc-900 rounded-3xl overflow-hidden cursor-pointer"
        >
            <div className="relative h-96 bg-gradient-to-br from-zinc-900 to-black">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="w-full h-full flex items-center justify-center text-gray-600 tracking-widest text-sm">
              [ EPSOC × ANDHERIWESTSHITPOSTING ]
            </div>

          <Link href="/events/andheriwestshitposting">
            <motion.button
              whileHover={{ scale: 1.08 }}
              className="absolute bottom-6 left-6 w-12 h-12 bg-black/60 backdrop-blur-md border border-gray-800 rounded-full flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 text-gray-400 rotate-45"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.6}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.button>
          </Link>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
