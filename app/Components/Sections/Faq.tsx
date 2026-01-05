"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "@/app/Components/Misc/Card";

const FAQS = [
  {
    question: "Can we submit articles and pieces to be featured in the magazine?",
    answer:
      "Yes, we are incredibly open to all quality submissions for all our editions as well as digests.",
  },
  {
    question: "How can I submit articles or essays?",
    answer:
      "You can submit your work through the submissions form available on the website during open calls.",
  },
  {
    question: "What can I write about?",
    answer:
      "We welcome content around economics, society, policy, culture, and interdisciplinary perspectives.",
  },
  {
    question: "Who can submit? Are there eligibility restrictions?",
    answer:
      "Anyone can submit. There are no strict eligibility restrictions as long as the work meets our standards.",
  },
  {
    question: "Can I submit more than one piece per open call?",
    answer:
      "Yes, multiple submissions are allowed, but each piece is reviewed independently.",
  },
  {
    question: "Do submissions have to be original and unpublished?",
    answer:
      "Yes. All submissions must be original and not previously published elsewhere.",
  },
  {
    question: "When will I know if my work is accepted?",
    answer:
      "Decisions are usually communicated within a few weeks after the submission deadline.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative min-h-screen bg-black text-gray-100 py-28 px-10 sm:px-14 md:px-20 lg:px-28 xl:px-36"
>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_1.25fr]">
        
        {/* LEFT COLUMN */}
        <div className="sticky top-24 h-fit space-y-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1 text-xs text-white/60">
              ● FAQ Section
            </span>

            <h1 className="mt-6 text-5xl font-light text-white">
              Homoeconomicus
            </h1>

            <p className="mt-4 mb-4 max-w-md text-sm text-white/60">
              Get an idea of what we expect from open call submissions.
            </p>
          </div>

          <Card className="space-y-4">
            <h3 className="text-lg text-white">Help</h3>

            <p className="text-sm text-white/60">
              Didn’t find your question?
            </p>

            <p className="text-sm text-white/50">
              Contact the editorial team through the website’s contact form,
              or visit 3rd floor classrooms at the SAMSOE building during office hours.
            </p>

            <button className="mt-4 w-fit rounded-full bg-white px-6 py-2 text-sm font-medium text-black">
              Submissions
            </button>
          </Card>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <button
                key={index}
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="w-full text-left"
              >
                <Card className="cursor-pointer">
                  <div className="flex items-center justify-between gap-6">
                    <p className="text-sm text-white">
                      {faq.question}
                    </p>

                    <span className="text-xl text-white/60">
                      {isOpen ? "×" : "+"}
                    </span>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-sm text-white/60">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
