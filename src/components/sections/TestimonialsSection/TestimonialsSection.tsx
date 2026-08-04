"use client";

import { useState } from "react";
import Image from "next/image";
import { Testimonial } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity.image";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const current = testimonials[currentIndex];

  // Generate optimized image URLs from Sanity (display size ~256px)
  const image1Url = urlFor(current.image1)
    .width(512)
    .quality(80)
    .auto("format")
    .url();
  const image2Url = urlFor(current.image2)
    .width(512)
    .quality(80)
    .auto("format")
    .url();

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
              src={image1Url}
              alt={`${current.couple} - Image 1`}
              fill
              quality={85}
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 768px) 176px, (max-width: 1024px) 224px, 256px"
            />
          </div>
          <div className="relative w-44 h-60 md:w-56 md:h-80 lg:w-64 lg:h-84 overflow-hidden shadow-xl">
            <Image
              src={image2Url}
              alt={`${current.couple} - Image 2`}
              fill
              quality={85}
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 768px) 176px, (max-width: 1024px) 224px, 256px"
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
        <div className="max-w-3xl mx-auto mb-6 md:mb-8">
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
        <div className="flex justify-center items-center gap-8 -mt-2">
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
