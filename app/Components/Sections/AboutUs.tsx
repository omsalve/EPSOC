"use client";

import Button from "../Misc/Button";
import Card from "../Misc/Card";

export default function AboutUs() {
  return (
    <div className="relative min-h-screen bg-black text-gray-100 py-20 px-8 md:px-16">
      {/* Header */}
      <header className="flex items-center justify-between mb-20">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-gray-200 text-sm md:text-base font-light tracking-wider">
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

      {/* Title Section */}
      <div className="text-center mb-20 animate-fade-in-up">
        <Button className="mb-5">© SAMSOE</Button>

        <h1 className="text-5xl md:text-7xl font-light mb-6">
          The <span className="font-normal">EPSOC</span>{" "}
          <span className="text-gray-500">Collective</span>
        </h1>

        <p className="text-gray-400 text-base md:text-lg max-w-4xl mx-auto font-light leading-relaxed">
          The shining new economic and political society of Sarla Anil Modi School
          of Economics, NMIMS, Mumbai.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <Card
          title="Mission"
          className="animate-fade-in-up-delay-1"
        >
          There is a certain propensity to short-sightedness, complacency and blind
          faith found in today's society, which has led to individualistic
          behaviour by economic agents, thereby fragmenting any semblance of
          community and shared sense of responsibility. And that is what EPSOC
          really addresses, by instilling in its members a fierce spirit of
          inquiry, and the power to move beyond theory (to praxis).
        </Card>

        <Card
          title="Vision"
          className="animate-fade-in-up-delay-2"
        >
          Our ultimate vision is to establish Sarla Anil Modi School of Economics
          as a premier choice for budding academics and field experts to share and
          discuss their work; we also seek to mobilise a student collective in
          Mumbai City that actively participates in the economic matters of the
          city. We intend to achieve this by year-around speaker sessions, guest
          lectures, a city-level youth parliament, a dedicated magazine and more.
          For students, this space shall serve as the focal point of
          extra-curricular contact with the disciplines of economics, political
          science and philosophy.
        </Card>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animate-fade-in-up-delay-1 {
          opacity: 0;
          animation: fade-in-up 1s ease-out 0.3s forwards;
        }

        .animate-fade-in-up-delay-2 {
          opacity: 0;
          animation: fade-in-up 1s ease-out 0.5s forwards;
        }
      `}</style>
    </div>
  );
}
