"use client";

import Link from "next/link";
import Image from "next/image";
import {
  STORIES_COUPLES,
  STORIES_COUPLE_IMAGE_EXTENSIONS,
} from "@/lib/constants";

// Helper function to get image path
function getImagePath(coupleName: string): string {
  const extension = STORIES_COUPLE_IMAGE_EXTENSIONS[coupleName] || ".jpeg";
  return `/images/StoriesThumbnail/${coupleName}${extension}`;
}

// Helper function to format couple name for display
function formatCoupleName(coupleName: string): string {
  // Handle "and" in names like "DhartiandShubham"
  let formatted = coupleName.replace(/and([A-Z])/g, " & $1");

  // Replace & with & and handle special cases
  formatted = formatted
    .replace(/&/g, " & ")
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before capital letters
    .replace(/\(wedding\)/gi, "")
    .trim();

  return formatted;
}

// Helper function to create slug from couple name
function createSlug(coupleName: string): string {
  return coupleName
    .toLowerCase()
    .replace(/and([a-z])/g, "-and-$1") // Handle "and" in names
    .replace(/&/g, "-")
    .replace(/[()]/g, "")
    .replace(/\s+/g, "-");
}

function StoriesPageMain() {
  // Group couples into pairs (2 per row)
  const couplePairs: string[][] = [];
  for (let i = 0; i < STORIES_COUPLES.length; i += 2) {
    couplePairs.push(STORIES_COUPLES.slice(i, i + 2));
  }

  return (
    <section
      className="w-full py-12 sm:py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: "#ede6e0" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quote */}
        <p
          className="text-center text-[10px] sm:text-xs uppercase tracking-wide mb-4 sm:mb-6"
          style={{
            fontFamily: "var(--font-family-body)",
            color: "#6A4F3D",
            fontWeight: "400",
          }}
        >
          FEATURED WEDDING PHOTOGRAPHY GALLERY
        </p>

        {/* Heading */}
        <h2
          className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-snug mb-12 sm:mb-16 md:mb-20 px-4"
          style={{
            fontFamily: "var(--font-family-heading)",
            color: "#2E2E2E",
          }}
        >
          Celebrating unforgettable moments
        </h2>

        {/* Couple Gallery Grid */}
      </div>
      <div className="w-full">
        {couplePairs.map((pair, pairIndex) => (
          <div
            key={pairIndex}
            className={`flex flex-col md:flex-row w-full gap-[1mm] ${
              pairIndex < couplePairs.length - 1 ? "mb-[1mm]" : ""
            }`}
          >
            {pair.map((coupleName, index) => {
              const imagePath = getImagePath(coupleName);
              const displayName = formatCoupleName(coupleName);
              const slug = createSlug(coupleName);

              return (
                <Link
                  key={coupleName}
                  href={`/stories/${slug}`}
                  className="relative w-full md:flex-1 h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] xl:h-[70vh] group overflow-hidden"
                >
                  <Image
                    src={imagePath}
                    alt={displayName}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />

                  {/* Hover Overlay - Light overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 ease-in-out"
                    style={{ backgroundColor: "#D2D2D0FF" }}
                  />

                  {/* Couple Name - Centered, always visible */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <h3
                      className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light uppercase tracking-wider"
                      style={{
                        fontFamily: "var(--font-family-heading)",
                        color: "#f5ecd9",
                        fontWeight: 500,
                      }}
                    >
                      {displayName}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}

export default StoriesPageMain;
