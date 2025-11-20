import Image from "next/image";
import { ROUTES, DEDICATION_VIDEO, DEDICATION_IMAGE } from "@/lib/constants";

function DedicationSection() {
  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 lg:py-20 xl:py-32 overflow-hidden"
      style={{ backgroundColor: "#ede6e0" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left Side - Video (Portrait, Bottom Aligned) - Hidden on Mobile & Tablet */}
          <div className="hidden lg:flex lg:col-span-3 items-end justify-start -ml-32 order-2 lg:order-1">
            <div className="relative w-80 h-[36rem] overflow-hidden shadow-xl mt-40">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={DEDICATION_VIDEO} type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Center - Text Content */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5 md:space-y-6 order-1 lg:order-2">
            {/* Heading */}
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-center lg:text-left leading-snug"
              style={{
                fontFamily: "var(--font-family-heading)",
                color: "#181716",
              }}
            >
              We are dedicated to ensuring <br /> you re-live your special day{" "}
              <br /> for decades to come.
            </h2>

            {/* Paragraph */}
            <p
              className="text-[10px] sm:text-[11px] md:text-xs font-thin leading-relaxed text-justify"
              style={{
                fontFamily: "var(--font-family-body)",
                letterSpacing: "0.15em",
                wordSpacing: "0.1em",
                color: "#181716",
              }}
            >
              Your wedding day is one of the most important days of your life,
              filled with love, joy, and unforgettable moments.
            </p>

            <p
              className="text-[10px] sm:text-[11px] md:text-xs font-thin leading-relaxed text-justify"
              style={{
                fontFamily: "var(--font-family-body)",
                letterSpacing: "0.15em",
                wordSpacing: "0.1em",
                color: "#181716",
              }}
            >
              Our team is dedicated to capturing these precious memories,
              ensuring that every smile, tear, and embrace is beautifully
              preserved. Let us help you relive the magic of your special day
              for years to come.
            </p>

            {/* Get In Touch Button */}
            <div className="pt-2 sm:pt-3 md:pt-4 flex justify-center lg:justify-start">
              <a
                href={ROUTES.STORIES}
                className="inline-block px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-[10px] sm:text-[11px] md:text-xs font-thin tracking-widest uppercase transition-all duration-300 text-[#181716] border border-[#181716] hover:bg-black hover:text-white"
                style={{
                  fontFamily: "var(--font-family-body)",
                  letterSpacing: "0.2em",
                }}
              >
                VIEW STORIES
              </a>
            </div>
          </div>

          {/* Right Side - Image (Landscape, Full width, touching right edge, moved up) */}
          <div className="lg:col-span-4 flex items-start justify-center lg:justify-end -mt-0 sm:-mt-4 md:-mt-8 lg:-mt-32 order-3">
            <div className="relative w-full sm:w-[120%] md:w-[200%] lg:w-[600%] xl:w-[700%] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[450px] overflow-hidden lg:overflow-visible translate-x-0 lg:translate-x-[40%]">
              <Image
                src={DEDICATION_IMAGE}
                alt="Wedding Photography"
                fill
                className="object-cover shadow-xl rounded-none"
                style={{ objectPosition: "center", borderRadius: "0" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DedicationSection;
