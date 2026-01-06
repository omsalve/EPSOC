"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Card from "@/app/Components/Misc/Card";
import Indicator from "@/app/Components/Misc/Indicator";

/* -------------------- Motion -------------------- */

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16 } },
};

export default function AndheriWestShitpostingPage() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      className="relative min-h-screen bg-black text-gray-100 px-6 sm:px-10 lg:px-16 xl:px-24 py-28"
    >
      {/* -------------------- HERO -------------------- */}
      <motion.div
        variants={stagger}
        className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] items-center mb-28"
      >
        {/* TEXT */}
        <motion.div variants={stagger}>
          <motion.div variants={fadeUp} className="mb-6">
            <Indicator>Guest Session · 2025 · SAMSOE, NMIMS Mumbai</Indicator>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl xl:text-7xl font-light leading-[1.05]"
          >
            EPSOC ×{" "}
            <span className="block text-gray-500 mt-2">
              andheriwestshitposting
            </span>
          </motion.h1>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          variants={fadeUp}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl"
        >
          <Image
            src="/images/awsp.jpg"
            alt="Andheri West Shitposting"
            fill
            priority
            className="object-cover grayscale-[20%] contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </motion.div>
      </motion.div>

      {/* -------------------- CARDS FLOW -------------------- */}
      <motion.div
        variants={stagger}
        className="mx-auto max-w-5xl space-y-14"
      >
        {/* CARD 1 */}
        <motion.div variants={fadeUp}>
          <Card>
            <p className="text-lg text-gray-300 leading-relaxed">
              Okay so what are we doing? Well, we have Balram Vishwakarma, who is
              one of the main admins of the Instagram Page,
              @andheriwestshitposting (or AWSP) coming in to talk about the
              strange and complex realities of public transit in Mumbai, which
              will be packed with funny anecdotes from his own experiences and
              observations (which are well documented on his page) - and
              there's much more stuff planned. This session will be very
              informal, and lighthearted - breaking away from traditional
              'lecture' type sessions and moving into the realm of the uncanny
              and unfiltered.
            </p>
          </Card>
        </motion.div>

        {/* CARD 2 */}
        <motion.div variants={fadeUp}>
          <Card>
            <p className="text-lg text-gray-300 leading-relaxed">
              Ready to unravel the mysteries behind Mumbai’s never-ending civic
              drama? Curious about why our city’s machinery seems stuck in a
              loop of chaos and confusion every monsoon, rewinding the same tail
              and images year after year? Wonder why some city projects spark
              more buzz than even the biggest Ganpati celebrations? Want to
              actually understand where the 75,000 Cr BMC budget is going to
              flush down (if not already submerged in the rains or stuck in
              traffic)?
            </p>
          </Card>
        </motion.div>

        {/* CARD 3 */}
        <motion.div variants={fadeUp}>
          <Card>
            <p className="text-lg text-gray-300 leading-relaxed">
              Come join us for a session packed with sharp wit, real talk, and
              lively humour where we peel back the layers of Mumbai’s political
              puzzles, its infrastructure quirks, and the social stories behind
              it all. This is not just another lecture, it’s a chance for you
              to speak up, challenge the status quo, and maybe even inspire and
              pioneer some real change.
            </p>
          </Card>
        </motion.div>

        {/* CARD 4 */}
        <motion.div variants={fadeUp}>
          <Card>
            <p className="text-lg text-gray-300 leading-relaxed">
              This event will be led by our guest speaker, Mr. Balram
              Vishwakarma, co-founder of Scroll Back Studios and one of the main
              Admins of the social media page @andheriwestshitposting, where he
              is known for his excellent deconstruction of Mumbai civic
              politics and his extensive ground level knowledge of the problems
              of our city.
            </p>
          </Card>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
