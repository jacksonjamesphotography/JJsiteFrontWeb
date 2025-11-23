import Image from "next/image";
import Link from "next/link";
import { EXPERIENCE_LEFT_IMAGE, EXPERIENCE_RIGHT_IMAGE } from "@/lib/constants";

function ExperienceSection() {
  return (
    <section
      className="relative py-20 md:py-32"
      style={{ backgroundColor: "#ede6e0" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-28 items-center">
          {/* Left Image - Wider and moved left */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative h-[550px] w-full overflow-hidden shadow-lg -mt-12 -ml-12">
              <Image
                src={EXPERIENCE_LEFT_IMAGE}
                alt="Wedding Photography"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Center Content */}
          <div className="lg:col-span-4 space-y-8 text-center overflow-visible">
            <div className="flex justify-center">
              <p
                className="text-xs md:text-sm uppercase tracking-wider font-extralight text-gray-600"
                style={{ fontFamily: "var(--font-family-body)" }}
              >
                <span className="md:whitespace-nowrap">
                  Experience Real Emotions, Real Moments,
                </span>
                <br className="md:hidden" />
                <span> Real Weddings</span>
              </p>
            </div>

            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-normal leading-snug uppercase text-center"
              style={{
                fontFamily: "var(--font-family-display)",
                color: "#2E2E2E",
              }}
            >
              Capturing real emotions,
              <br />
              Preserving moments for{" "}
              <span
                className="text-3xl md:text-4xl lg:text-5xl normal-case"
                style={{ fontFamily: "var(--font-family-script)" }}
              >
                eternity.
              </span>
            </h2>

            <div className="space-y-6 max-w-2xl mx-auto">
              <p
                className="text-sm md:text-sm text-gray-700 leading-relaxed"
                style={{ fontFamily: "var(--font-family-body)" }}
              >
                Your wedding day is one of life&apos;s most precious moments,
                filled with love, joy, and lasting memories.
              </p>

              <p
                className="text-sm md:text-sm text-gray-700 leading-relaxed"
                style={{ fontFamily: "var(--font-family-body)" }}
              >
                Our candid photography captures authentic emotions and intimate
                moments, allowing you to relive and cherish your special day
                forever.
              </p>

              <div className="mt-8 text-center">
                <p
                  className="text-sm md:text-sm font-thin text-text-primary uppercase tracking-widest"
                  style={{
                    fontFamily: "var(--font-family-body)",
                    letterSpacing: "0.2em",
                  }}
                >
                  THE EXPERIENCE
                </p>
                <Link href="/stories">
                  <p className="text-base md:text-base text-text-primary cursor-pointer hover:opacity-70 transition-opacity">
                    +
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Image - Slightly smaller and moved down */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative h-[500px] w-full overflow-hidden shadow-lg mt-12">
              <Image
                src={EXPERIENCE_RIGHT_IMAGE}
                alt="Wedding Moments"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
