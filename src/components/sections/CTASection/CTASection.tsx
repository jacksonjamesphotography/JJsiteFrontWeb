"use client";

import Link from "next/link";
import Image from "next/image";
import { CTA_STORIES_IMAGE, CTA_FILMS_IMAGE } from "@/lib/constants";

function CTASection() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex">
      {/* Left Half - Stories */}
      <Link
        href="/stories"
        className="relative w-1/2 h-full group overflow-hidden"
      >
        <Image
          src={CTA_STORIES_IMAGE}
          alt="Stories"
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />

        {/* Hover Overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 ease-in-out"
          style={{ backgroundColor: "#f4e4d6" }}
        />

        {/* Text (Always aligned left bottom) */}
        <div className="absolute inset-0 flex items-end justify-start p-8">
          <div className="text-left">
            <h3
              className="opacity-100 md:opacity-0 group-hover:opacity-100 text-gray-900 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light uppercase tracking-wider z-10 transition-all duration-700 ease-in-out transform translate-y-0 md:translate-y-6 group-hover:translate-y-0"
              style={{
                fontFamily: "var(--font-family-display)",
              }}
            >
              Stories
            </h3>
            <div className="opacity-100 md:opacity-0 group-hover:opacity-100 mt-4 transition-all duration-700 ease-in-out transform translate-y-0 md:translate-y-6 group-hover:translate-y-0">
              <p
                className="text-gray-900 text-xs md:text-sm uppercase tracking-wider mb-4 md:mb-6"
                style={{ fontFamily: "var(--font-family-body)" }}
              >
                VISIT THE GALLERIES
              </p>
              <div className="w-24 md:w-32 h-[1px] bg-gray-900"></div>
            </div>
          </div>
        </div>
      </Link>

      {/* Right Half - Films */}
      <Link
        href="/films"
        className="relative w-1/2 h-full group overflow-hidden"
      >
        <Image
          src={CTA_FILMS_IMAGE}
          alt="Films"
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />

        {/* Hover Overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 ease-in-out"
          style={{ backgroundColor: "#f4e4d6" }}
        />

        {/* Text (Always aligned right bottom) */}
        <div className="absolute inset-0 flex items-end justify-end p-8">
          <div className="text-right">
            <h3
              className="opacity-100 md:opacity-0 group-hover:opacity-100 text-gray-900 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light uppercase tracking-wider z-10 transition-all duration-700 ease-in-out transform translate-y-0 md:translate-y-6 group-hover:translate-y-0"
              style={{
                fontFamily: "var(--font-family-display)",
              }}
            >
              Films
            </h3>
            <div className="opacity-100 md:opacity-0 group-hover:opacity-100 mt-4 transition-all duration-700 ease-in-out transform translate-y-0 md:translate-y-6 group-hover:translate-y-0">
              <p
                className="text-gray-900 text-xs md:text-sm uppercase tracking-wider mb-4 md:mb-6"
                style={{ fontFamily: "var(--font-family-body)" }}
              >
                VISIT THE GALLERIES
              </p>
              <div className="w-24 md:w-32 h-[1px] bg-gray-900 ml-auto"></div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default CTASection;
