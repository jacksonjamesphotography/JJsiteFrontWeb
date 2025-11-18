function OurVisionSection() {
  return (
    <section
      className="w-full py-12 sm:py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: "#ede6e0" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p
          className="text-[10px] sm:text-xs md:text-sm uppercase tracking-wider font-extralight text-gray-600 mb-4 sm:mb-6 md:mb-8"
          style={{ fontFamily: "var(--font-family-body)" }}
        >
          Elevating timeless celebrations
        </p>

        <h2
          className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-snug uppercase mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4"
          style={{ fontFamily: "var(--font-family-display)", color: "#2E2E2E" }}
        >
          Our Vision
          <br />
          <span
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl normal-case lowercase"
            style={{ fontFamily: "var(--font-family-script)" }}
          >
            your moments.
          </span>
        </h2>

        <p
          className="mt-8 w-full max-w-[320px] sm:max-w-none mx-auto text-xs sm:text-sm md:text-base leading-relaxed text-gray-800 text-justify sm:text-justify"
          style={{ fontFamily: "var(--font-family-body)" }}
        >
          Our vision is to scale Jackson James Photography into a leading
          premium wedding visual storytelling brand across India and selected
          international markets.
          <br />
          <br />
          We aim to double our annual project volume while maintaining our
          signature quality by streamlining operations, investing in skilled
          talent, and expanding our post-production capabilities.
          <br />
          <br />
          Through strategic partnerships, technology-driven workflow
          improvements, and enhanced client experience, we intend to build a
          brand known not just for creative excellence, but also for
          reliability, efficiency, and innovation in the wedding industry.
        </p>
      </div>
    </section>
  );
}

export default OurVisionSection;
