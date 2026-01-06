"use client";

import { motion, type Variants } from "framer-motion";
import Card from "../Misc/Card";
import Indicator from "../Misc/Indicator";

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
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

export default function AboutUs() {
  return (
    <motion.section
      id="aboutus"
      variants={section}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      className="relative min-h-screen bg-black text-gray-100 py-28 px-10 sm:px-14 md:px-20 lg:px-28 xl:px-36"

    >
      {/* -------------------- Title -------------------- */}
      <motion.div
        variants={stagger}
        className="text-center mb-24 max-w-5xl mx-auto"
      >
        <motion.div variants={fadeUp} className="mb-6">
          <Indicator>© SAMSOE</Indicator>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-7xl font-light mb-6 leading-tight"
        >
          The <span className="font-normal">EPSOC</span>{" "}
          <span className="text-gray-500">Collective</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-gray-400 text-base md:text-lg font-light leading-relaxed"
        >
          The economic and political society of the Sarla Anil Modi School of
          Economics, NMIMS Mumbai — built as a serious institutional space for
          inquiry, discourse, and praxis.
        </motion.p>
      </motion.div>

      {/* -------------------- Mission & Vision -------------------- */}
      <motion.div
        variants={stagger}
        className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto items-stretch"
      >
        {/* Mission */}
        <motion.div variants={fadeUp} className="h-full">
          <Card title="Mission" className="h-full flex flex-col">
            <p className="flex-1">
              Contemporary society exhibits a persistent tendency toward
              short-sightedness, complacency, and blind faith — conditions that
              encourage fragmented, individualistic behaviour among economic
              agents. EPSOC exists to counter this drift by cultivating a
              disciplined spirit of inquiry and by pushing its members beyond
              theory toward praxis.
            </p>
          </Card>
        </motion.div>

        {/* Vision */}
        <motion.div variants={fadeUp} className="h-full">
          <Card title="Vision" className="h-full flex flex-col">
            <p className="flex-1">
              EPSOC seeks to establish the Sarla Anil Modi School of Economics as
              a premier platform for academics and practitioners to present,
              contest, and refine ideas. In parallel, it aims to mobilise a
              student collective in Mumbai that actively engages with the
              economic and political realities of the city through year-round
              speaker sessions, guest lectures, a city-level youth parliament,
              and a dedicated publication.
            </p>
          </Card>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
