import Image from "next/image";
import { ABOUT_JACKSON_IMAGE } from "@/lib/constants";

function AboutJackson() {
  return (
    <section
      className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28"
      style={{ backgroundColor: "#f9f6f5" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quote */}
        <p
          className="text-center text-[10px] sm:text-xs md:text-sm uppercase tracking-wider font-extralight text-gray-600 mb-4 sm:mb-6 md:mb-8"
          style={{ fontFamily: "var(--font-family-body)" }}
        >
          CAPTURING STORIES THAT LAST FOREVER
        </p>

        {/* Heading */}
        <h2
          className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-snug uppercase mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4"
          style={{ fontFamily: "var(--font-family-display)", color: "#2E2E2E" }}
        >
          Your story,
          <br />
          <span
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl normal-case lowercase"
            style={{ fontFamily: "var(--font-family-script)" }}
          >
            our inspiration
          </span>
        </h2>

        {/* Content with Image and Text */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center lg:items-start">
          {/* Jackson Image */}
          <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start px-6 sm:px-8 md:px-10 lg:px-0">
            <div className="relative w-full max-w-[300px] h-[360px] sm:max-w-[340px] sm:h-[420px] md:w-60 md:h-72 lg:w-64 lg:h-80">
              <Image
                src={ABOUT_JACKSON_IMAGE}
                alt="Jackson James"
                width={280}
                height={360}
                className="w-full h-full object-cover shadow-md"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>

          {/* Two Column Text */}
          <div className="flex-1 w-full max-w-4xl px-6 sm:px-8 md:px-10 lg:px-0">
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 text-[11px] sm:text-xs md:text-sm leading-relaxed font-light w-full max-w-[300px] sm:max-w-[340px] md:max-w-none mx-auto"
              style={{ fontFamily: "var(--font-family-body)" }}
            >
              {/* Column 1 */}
              <div className="space-y-3 sm:space-y-4">
                <p style={{ textAlign: "justify" }}>
                  Hello, I'm Jackson James. We are a premium wedding photography
                  and cinematography company specializing in visually stunning
                  and emotionally rich narratives that capture the essence of
                  your celebration.
                </p>
                <p style={{ textAlign: "justify" }}>
                  With our handpicked team of skilled photographers,
                  cinematographers, and editors, we capture authentic moments
                  with artistic flair—delivering high-quality photos and 4K
                  cinematic films that reflect each couple's unique story. Every
                  frame is crafted with care and attention to detail.
                </p>
                <p style={{ textAlign: "justify" }}>
                  Our approach combines documentary-style storytelling with
                  editorial finesse, ensuring your memories are preserved
                  beautifully for generations to come.
                </p>
              </div>

              {/* Column 2 */}
              <div className="space-y-3 sm:space-y-4">
                <p style={{ textAlign: "justify" }}>
                  What started as a passion project has evolved into a trusted
                  brand serving distinguished clients across India and beyond.
                  Our journey has been driven by a commitment to excellence and
                  creativity.
                </p>
                <p style={{ textAlign: "justify" }}>
                  Built on consistent quality and personal attention, we've
                  grown through word-of-mouth referrals—expanding to
                  international weddings, opening our Kochi office, and building
                  a robust post-production team that delivers exceptional
                  results.
                </p>
                <p style={{ textAlign: "justify" }}>
                  Today, we serve business leaders, celebrities, and royal
                  families while staying true to our core values of creativity,
                  reliability, and heartfelt storytelling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutJackson;
