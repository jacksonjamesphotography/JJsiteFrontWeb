"use client";

import Link from "next/link";
import { ROUTES, ABOUT_FILMS_VIDEO } from "@/lib/constants";

export default function AboutFilms() {
  return (
    <section
      className="w-full py-12 sm:py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: "#f9f6f5" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Heading */}
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight"
              style={{
                fontFamily: "var(--font-family-display)",
                color: "#2E2E2E",
              }}
            >
              We can&apos;t wait to make <br />
              <span style={{ fontStyle: "italic" }}>
                your love story
              </span> your <br />
              favourite movie to watch
            </h2>

            {/* Paragraph */}
            <p
              className="text-[11px] sm:text-xs md:text-sm leading-relaxed font-light max-w-md"
              style={{
                fontFamily: "var(--font-family-body)",
                color: "#4a4a4a",
                textAlign: "justify",
              }}
            >
              At Jackson James Photography, we transform your wedding moments
              into cinematic experiences. Our team captures every emotion, every
              glance, and every celebration with the artistry of filmmaking,
              ensuring your love story becomes a timeless masterpiece you'll
              treasure forever.
            </p>

            {/* Button */}
            <Link
              href={ROUTES.CONTACT}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-6 sm:py-3 text-[10px] sm:text-xs font-thin tracking-widest uppercase transition-all duration-300 border-2 group"
              style={{
                fontFamily: "var(--font-family-body)",
                letterSpacing: "0.2em",
                color: "#2E2E2E",
                borderColor: "#2E2E2E",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#22333b";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.borderColor = "#22333b";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#2E2E2E";
                e.currentTarget.style.borderColor = "#2E2E2E";
              }}
            >
              Inquire Now
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Right Side - Video */}
          <div className="relative w-full max-w-md mx-auto lg:max-w-sm aspect-video lg:aspect-[3/4] overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={ABOUT_FILMS_VIDEO} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
