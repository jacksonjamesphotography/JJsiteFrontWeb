"use client";

import Image from "next/image";
import { ABOUT_JACKSON_IMAGE_2 } from "@/lib/constants";

function OurJourney() {
  return (
    <section
      className="w-full py-12 sm:py-16 md:py-20"
      style={{ backgroundColor: "#b7ad9d" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-[#302e2f]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading + Image */}
          <div className="w-full lg:w-auto flex flex-col items-center lg:items-start gap-10 sm:gap-12">
            <div className="text-center lg:text-left w-full max-w-[300px] sm:max-w-[340px] md:max-w-[360px] px-6 sm:px-8 md:px-10 lg:px-0">
              <h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-snug uppercase"
                style={{ fontFamily: "var(--font-family-display)" }}
              >
                Our Story,
                <br />
                <span
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl normal-case lowercase"
                  style={{ fontFamily: "var(--font-family-script)" }}
                >
                  your story
                </span>
              </h2>
            </div>

            <div className="w-full flex justify-center lg:justify-start px-6 sm:px-8 md:px-10 lg:px-0">
              <div className="relative w-full max-w-[300px] sm:max-w-[340px] md:max-w-[380px] aspect-[3/4] shadow-lg">
                <Image
                  src={ABOUT_JACKSON_IMAGE_2}
                  alt="Jackson James"
                  fill
                  className="object-cover"
                  priority
                  sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 90vw"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Text */}
          <div className="flex-1 w-full max-w-4xl px-6 sm:px-8 md:px-10 lg:px-0 lg:mt-32">
            <p
              className="text-[10px] sm:text-xs md:text-sm uppercase tracking-widest font-light mb-1 mt-3"
              style={{
                fontFamily: "var(--font-family-body)",
                color: "#f2eae2",
              }}
            >
              Our Journey
            </p>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-8 text-[11px] sm:text-xs md:text-sm leading-relaxed mt-2 w-full max-w-[300px] sm:max-w-[340px] md:max-w-none mx-auto"
              style={{
                fontFamily: "var(--font-family-body)",
                color: "#f2eae2",
              }}
            >
              <div className="space-y-3 sm:space-y-4">
                <p style={{ textAlign: "justify" }}>
                  Jackson James Photography began as a passion project—rooted in
                  the love for storytelling and the pursuit of timeless moments.
                  What started as a one-man venture has now evolved into a
                  premium wedding photography and cinematography brand with a
                  growing team of talented professionals.
                </p>
                <p style={{ textAlign: "justify" }}>
                  In the early years, we built our reputation through consistent
                  quality and personal attention to each client. Word of mouth
                  and referrals fueled our growth, and soon, we were covering
                  weddings across India and internationally.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <p style={{ textAlign: "justify" }}>
                  Over time, we expanded operations, set up a new office in
                  Kochi, and built a robust post-production team to handle
                  large-scale projects. Today, we are proud to serve a
                  distinguished clientele—including business leaders,
                  celebrities, and royal families.
                </p>
                <p style={{ textAlign: "justify" }}>
                  Through every chapter, we stay true to our core values:
                  creativity, reliability, and heartfelt storytelling. Our
                  journey has been one of steady growth, bold decisions, and an
                  unwavering commitment to excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurJourney;
