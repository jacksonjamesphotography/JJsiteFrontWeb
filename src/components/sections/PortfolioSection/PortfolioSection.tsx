"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PORTFOLIO_IMAGES } from "@/lib/constants";

function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    if (currentIndex < PORTFOLIO_IMAGES.length - 3) {
      setCurrentIndex(currentIndex + 3);
    } else {
      // Cycle back to the beginning
      setCurrentIndex(0);
    }
    setTimeout(() => setIsTransitioning(false), 200);
  };

  const scrollToPrev = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 3);
    } else {
      // Cycle to the end
      setCurrentIndex(PORTFOLIO_IMAGES.length - 3);
    }
    setTimeout(() => setIsTransitioning(false), 200);
  };

  return (
    <section
      className="py-12 md:py-20 lg:py-32"
      style={{ backgroundColor: "#f9f6f5" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="mb-8 md:mb-16">
          {/* Heading and Horizontal Bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center mb-6 md:mb-8 gap-3 md:gap-0 ml-6 md:ml-0">
            <h2
              className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-light uppercase tracking-wider text-gray-800 md:mr-4"
              style={{
                fontFamily: "var(--font-family-display)",
                transform: "translateX(0px) md:translateX(48px)",
              }}
            >
              <span className="italic">The</span> Portfolio
            </h2>
            <div className="hidden md:block w-32 lg:w-128 h-[1px] bg-gray-400 ml-4 lg:ml-14"></div>
            <p
              className="text-xs md:text-sm text-gray-600 font-thin uppercase tracking-widest md:ml-4"
              style={{ fontFamily: "var(--font-family-body)" }}
            >
              where luxury meets artistry
            </p>
          </div>
        </div>

        {/* Image Gallery Section - Full Width */}
        <div className="mb-8 md:mb-16 -mx-4 md:-mx-6">
          <div className="flex items-center gap-2 md:gap-4 px-4 md:px-6">
            {/* Left Arrow */}
            <button
              onClick={scrollToPrev}
              disabled={isTransitioning}
              className={`flex-shrink-0 p-1 md:p-2 transition-all duration-300 flex items-center justify-center ${
                isTransitioning
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer"
              }`}
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-600 hover:text-gray-800 transition-colors duration-300" />
            </button>

            {/* Images Container */}
            <div
              ref={scrollContainerRef}
              className="flex-1 flex gap-2 md:gap-4 overflow-hidden"
            >
              {PORTFOLIO_IMAGES.slice(currentIndex, currentIndex + 3).map(
                (image, index) => (
                  <div
                    key={currentIndex + index}
                    className={`flex-1 w-full h-[300px] md:h-[400px] lg:h-[500px] relative overflow-hidden shadow-lg transition-opacity duration-200 ease-in ${
                      isTransitioning ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Portfolio ${currentIndex + index + 1}`}
                      fill
                      quality={85}
                      loading="lazy"
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                )
              )}
            </div>

            {/* Right Arrow */}
            <button
              onClick={scrollToNext}
              disabled={isTransitioning}
              className={`flex-shrink-0 p-1 md:p-2 transition-all duration-300 flex items-center justify-center ${
                isTransitioning
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer"
              }`}
            >
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-gray-600 hover:text-gray-800 transition-colors duration-300" />
            </button>
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-1 px-4 md:px-6">
          {/* Left - Quote */}
          <div className="flex-1 max-w-sm md:max-w-md md:ml-7">
            <p
              className="text-xs text-gray-800 leading-relaxed tracking-wide"
              style={{ fontFamily: "var(--font-family-body)" }}
            >
              Every frame captures a story, every moment{" "}
              <br className="hidden md:block" /> becomes timeless. We preserve
              the beauty <br className="hidden md:block" />
              of your most precious memories.
            </p>
          </div>

          {/* Right - Button */}
          <Link
            href="/stories"
            className="px-4 md:px-8 py-2 md:py-3 border-2 border-gray-600 text-gray-600 hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300 font-light uppercase tracking-wider text-xs self-start md:self-auto md:mr-7 inline-block"
            style={{ fontFamily: "var(--font-family-body)" }}
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
