function OurCommunity() {
  return (
    <section
      className="w-full py-12 sm:py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: "#f9f6f5" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p
          className="text-[10px] sm:text-xs md:text-sm uppercase tracking-wider font-extralight text-gray-600 mb-4 sm:mb-6 md:mb-8"
          style={{ fontFamily: "var(--font-family-body)" }}
        >
          Preserving culture, uplifting communities
        </p>

        <h2
          className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-snug uppercase mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4"
          style={{ fontFamily: "var(--font-family-display)", color: "#2E2E2E" }}
        >
          Our Community
          <br />
          <span
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl normal-case lowercase"
            style={{ fontFamily: "var(--font-family-script)" }}
          >
            our responsibility.
          </span>
        </h2>

        <p
          className="mt-8 w-full max-w-[320px] sm:max-w-none mx-auto text-xs sm:text-sm md:text-base leading-relaxed text-gray-800 text-justify sm:text-justify"
          style={{ fontFamily: "var(--font-family-body)" }}
        >
          At Jackson James Photography, we believe that storytelling through
          visuals is more than just a service—it's a way to preserve culture,
          emotion, and legacy. By documenting weddings, we help families across
          generations relive the most important moments of their lives.
          <br />
          <br />
          Beyond that, we actively support local talent by hiring and training
          young photographers, videographers, and editors, offering them
          real-world exposure and growth opportunities. We also collaborate with
          small, local vendors—be it makeup artists, decorators, or
          freelancers—contributing to the creative economy.
          <br />
          <br />
          In addition, we've occasionally offered our services at minimal or no
          cost for special community-driven events and intimate weddings that
          carry emotional or social significance. Through all this, our goal is
          to use our craft not only to celebrate love but to uplift people and
          create meaningful impact in the communities we work in.
        </p>
      </div>
    </section>
  );
}

export default OurCommunity;
