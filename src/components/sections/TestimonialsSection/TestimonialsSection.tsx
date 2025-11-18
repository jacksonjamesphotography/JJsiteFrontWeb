"use client";

import { useState } from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      className="relative py-20 md:py-32"
      style={{ backgroundColor: "#f9f6f5" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-8 relative z-10">
          <h2
            className="text-6xl md:text-8xl lg:text-9xl font-light"
            style={{
              fontFamily: "var(--font-family-display)",
              fontSize: "clamp(3rem, 8vw, 7.5rem)",
              color: "#181716",
            }}
          >
            <span className="italic">Client</span>{" "}
            <span className="font-normal uppercase">PRAISE</span>
          </h2>
        </div>

        {/* Images - Overlapping the heading by half */}
        <div
          className="flex justify-center items-start gap-6 mb-8 relative z-20"
          style={{
            transform: "translateY(-18%)",
          }}
        >
          <div className="relative w-44 h-60 md:w-56 md:h-80 lg:w-64 lg:h-84 overflow-hidden shadow-xl">
            <Image
              src={current.image1}
              alt={`${current.couple} - Image 1`}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-44 h-60 md:w-56 md:h-80 lg:w-64 lg:h-84 overflow-hidden shadow-xl">
            <Image
              src={current.image2}
              alt={`${current.couple} - Image 2`}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Couple Name */}
        <div className="text-center mb-8">
          <h3
            className="text-2xl md:text-3xl lg:text-4xl font-light"
            style={{
              fontFamily: "var(--font-family-heading)",
              color: "#181716",
            }}
          >
            {current.couple}
          </h3>
        </div>

        {/* Testimonial Text */}
        <div className="max-w-3xl mx-auto mb-12 md:mb-16">
          <p
            className="text-[10px] sm:text-xs md:text-sm leading-relaxed text-justify tracking-wide"
            style={{
              fontFamily: "var(--font-family-body)",
              letterSpacing: "0.05em",
              color: "#181716",
            }}
          >
            {current.testimonial}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-8">
          <button
            onClick={handlePrevious}
            className="text-xs md:text-sm uppercase tracking-wider hover:opacity-70 transition-opacity duration-300 font-light cursor-pointer"
            style={{
              fontFamily: "var(--font-family-body)",
              color: "#181716",
            }}
          >
            Previous
          </button>
          <span style={{ color: "#181716", opacity: 0.4 }}>|</span>
          <button
            onClick={handleNext}
            className="text-xs md:text-sm uppercase tracking-wider hover:opacity-70 transition-opacity duration-300 font-light cursor-pointer"
            style={{
              fontFamily: "var(--font-family-body)",
              color: "#181716",
            }}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
