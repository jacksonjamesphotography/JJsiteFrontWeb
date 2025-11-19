import Image from "next/image";

function OurMission() {
  return (
    <section
      className="relative py-20 md:py-32"
      style={{ backgroundColor: "#f9f6f5" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Center Content */}
          <div className="space-y-8 text-center">
            <div className="flex justify-center">
              <p
                className="text-xs md:text-sm uppercase tracking-wider font-extralight text-gray-600 whitespace-nowrap"
                style={{ fontFamily: "var(--font-family-body)" }}
              >
                Our Mission
              </p>
            </div>

            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-normal leading-snug uppercase text-center"
              style={{
                fontFamily: "var(--font-family-display)",
                color: "#2E2E2E",
              }}
            >
              To Break
              <br />
              <span
                className="text-3xl md:text-4xl lg:text-5xl normal-case lowercase"
                style={{ fontFamily: "var(--font-family-script)" }}
              >
                stereotypes
              </span>{" "}
              One
              <br />
              Frame at a time
            </h2>

            <div className="flex justify-center mt-6">
              <Image
                src="/images/logo/logoblack.png?v=2"
                alt="Jackson Logo"
                width={145}
                height={145}
                className="object-contain"
                unoptimized
              />
            </div>

            <div className="space-y-8 max-w-2xl mx-auto">
              <p
                className="text-sm md:text-sm text-gray-700 leading-relaxed"
                style={{ fontFamily: "var(--font-family-body)" }}
              >
                Love transcends all human-made constructs of <br />
                borders, race, gender, sexuality, and more.
              </p>

              <p
                className="text-sm md:text-sm text-gray-700 leading-relaxed"
                style={{ fontFamily: "var(--font-family-body)" }}
              >
                When we hold up our cameras we zoom out of these{" "}
                <br className="hidden md:block" />
                constructs and focus in on the true emotions, hidden{" "}
                <br className="hidden md:block" />
                smiles, bright colours, and the true love you share{" "}
                <br className="hidden md:block" />
                and all that is beautiful. <br className="hidden md:block" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurMission;
