"use client";

import Link from "next/link";
import { ROUTES } from "@/lib/constants";

export default function GlimpsText() {
  return (
    <section
      className="w-full py-12 sm:py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: "#f9f6f5" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Side - Text Content */}
          <div className="flex-1 space-y-4 sm:space-y-6">
            {/* Quote */}
            <p
              className="text-[10px] sm:text-xs uppercase tracking-wide"
              style={{
                fontFamily: "var(--font-family-body)",
                color: "#2E2E2E",
                fontWeight: "400",
              }}
            >
              HERE&apos;S A GLIMPSE INTO THE
            </p>

            {/* Heading */}
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight"
              style={{
                fontFamily: "var(--font-family-heading)",
                color: "#2E2E2E",
              }}
            >
              Love stories we&apos;ve danced through, <br />
              frozen in the{" "}
              <span style={{ fontFamily: "var(--font-family-script)" }}>
                dreamy realm
              </span>{" "}
              of time
            </h2>

            {/* Paragraph */}
            <p
              className="text-[11px] sm:text-xs md:text-sm leading-relaxed font-light max-w-xl"
              style={{
                fontFamily: "var(--font-family-body)",
                color: "#4a4a4a",
                textAlign: "justify",
              }}
            >
              In these photographs, each smile and tear holds countless untold
              tales. We feel honoured to have the privilege to capture this
              symphony of emotions through our cameras and share them with you.
              For the couples and their loved ones, their wedding is a blur of
              happy memories. For us, each wedding is a million distinct stories
              waiting to be frozen in time.
            </p>
          </div>

          {/* Right Side - Button */}
          <div className="lg:pt-12">
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
        </div>
      </div>
    </section>
  );
}
