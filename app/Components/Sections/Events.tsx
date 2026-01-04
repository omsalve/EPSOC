"use client";

export default function Events() {
  return (
    <div className="relative min-h-screen bg-black text-gray-100 py-20 px-8 md:px-16">
      {/* Header */}
      <header className="flex items-center justify-between mb-20">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
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
            <span className="w-7 h-0.5 bg-gray-300 transition-all group-hover:bg-white"></span>
            <span className="w-7 h-0.5 bg-gray-300 transition-all group-hover:bg-white"></span>
            <span className="w-7 h-0.5 bg-gray-300 transition-all group-hover:bg-white"></span>
          </button>
        </div>
      </header>

      {/* Title Section */}
      <div className="mb-16 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-800 rounded-full mb-8">
          <span className="text-xl">©</span>
          <span className="text-gray-400 text-sm tracking-wider">EPSOC Events</span>
        </div>
        
        <div className="flex items-end justify-between mb-8">
          <div>
            <h1 className="text-5xl md:text-7xl font-light mb-6">
              Recent <span className="text-gray-500">Events</span>
              <span className="inline-block ml-4 text-gray-600">
                <svg className="w-12 h-12 md:w-16 md:h-16 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </h1>
            
            <p className="text-gray-400 text-base md:text-lg font-light">
              Showcase of some of our recent events
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="px-6 py-3 text-gray-300 hover:text-white transition-all duration-300 font-light font-mono text-sm">
              See All Events
            </button>
            <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-full transition-all duration-300 font-light">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Event Card */}
      <div className="max-w-2xl animate-fade-in-up-delay">
        <div className="group relative bg-zinc-950 border border-zinc-900 rounded-3xl overflow-hidden hover:border-zinc-800 transition-all duration-500 cursor-pointer">
          {/* Event Image */}
          <div className="relative h-96 bg-gradient-to-br from-zinc-900 to-black overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            
            {/* Placeholder for event image - Replace with actual image */}
            <div className="w-full h-full flex items-center justify-center text-gray-700">
              [Event Image - EPSOC x Andreen Shipyasa Logo]
            </div>

            {/* Arrow Button */}
            <button className="absolute bottom-6 left-6 w-12 h-12 bg-black/50 backdrop-blur-sm border border-gray-800 rounded-full flex items-center justify-center hover:bg-black/70 hover:border-gray-700 transition-all duration-300 group">
              <svg className="w-5 h-5 text-gray-400 group-hover:text-white transform rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
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

        .animate-fade-in-up-delay {
          opacity: 0;
          animation: fade-in-up 1s ease-out 0.3s forwards;
        }
      `}</style>
    </div>
  );
}