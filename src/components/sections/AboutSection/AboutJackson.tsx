function AboutJackson() {
  return (
    <section
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#ede6e0" }}
    >
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-left">
        {/* About the Artist */}
        <p
          className="text-xs uppercase tracking-[0.2em] text-gray-700 mb-4 text-center"
          style={{
            fontFamily: "var(--font-family-body)",
            fontWeight: "100",
          }}
        >
          About the Artist
        </p>

        {/* Meet Jackson */}
        <h2
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-gray-800 mb-6"
          style={{ fontFamily: "var(--font-family-display)" }}
        >
          <span className="italic">Meet</span> JACKSON
        </h2>

        {/* The eyes behind lens */}
        <p
          className="text-sm md:text-sm lg:text-md  text-gray-900 mb-8"
          style={{ fontFamily: "var(--font-family-body)" }}
        >
          Capturing stories, framing souls.
        </p>

        {/* Main paragraph */}
        <p
          className="text-xs md:text-sm text-gray-900 leading-loose mb-8 max-w-xl text-justify tracking-wide"
          style={{ fontFamily: "var(--font-family-body)" }}
        >
          We&apos;re a team of heart winning storytellers. <br /> We&apos;re
          smile-searchers, light-catchers, love- <br />
          whisperers, story-spinners, colour-painters. <br /> And we can&apos;t wait
          to hear your story. In the <br />
          meantime here&apos;s ours.
        </p>

        {/* About us button */}
        <div className="flex justify-center">
          <a
            href="/about"
            className="inline-block px-4 md:px-5 py-2 md:py-2.5 border-2 border-gray-600 text-gray-600 hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300 font-thin uppercase tracking-[0.2em] text-xs md:text-sm cursor-pointer"
            style={{
              fontFamily: "var(--font-family-body)",
              letterSpacing: "0.2em",
              fontWeight: 200,
            }}
          >
            About us
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutJackson;
