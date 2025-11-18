"use client";

import { useRef, useEffect, useState } from "react";

export default function FilmsHeader() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  // 🎥 Autoplay handling
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;

    const tryPlay = async () => {
      try {
        await video.play();
        setLoaded(true);
      } catch (err) {
        console.warn("Autoplay blocked:", err);
        document.addEventListener("click", () => video.play(), { once: true });
      }
    };
    tryPlay();
  }, []);

  // 🌫️ Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && videoRef.current) {
        const rect = containerRef.current.getBoundingClientRect();

        // Calculate parallax based on section position
        const scrolled = -rect.top;
        const rate = scrolled * 0.5; // Adjust for parallax intensity

        videoRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[60vh] w-full">
      {/* Sticky container that holds the video in place */}
      <div className="sticky top-0 h-[60vh] w-full overflow-hidden">
        <section ref={sectionRef} className="relative h-full w-full">
          {/* --- Video Layer with extra height for parallax --- */}
          <div className="absolute inset-0 h-[120%] -top-[10%] overflow-hidden">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover z-0 will-change-transform"
              onLoadedData={() => setLoaded(true)}
            >
              <source src="/videos/FilmBackground.mp4" type="video/mp4" />
            </video>
          </div>

          {/* --- Overlay for readability --- */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>

          {/* --- Content Layer - Centered --- */}
          <div className="relative z-20 h-full flex flex-col items-center justify-center p-6 md:p-8 lg:p-12">
            <div className="text-center max-w-4xl mx-auto">
              {/* Heading */}
              <h1
                className="leading-tight text-[28px] sm:text-[35px] md:text-[40px] lg:text-[45px] mb-6 text-white"
                style={{
                  fontFamily: "var(--font-family-display)",
                  fontWeight: "400",
                }}
              >
                wedding{" "}
                <span
                  className="normal-case text-[40px] sm:text-[50px] md:text-[58px] lg:text-[65px]"
                  style={{
                    fontFamily: "var(--font-family-script)",
                    fontWeight: "500",
                  }}
                >
                  films
                </span>
              </h1>

              {/* Quote */}
              <p
                className="text-xs sm:text-sm md:text-base uppercase tracking-wider text-white"
                style={{
                  fontFamily: "var(--font-family-body)",
                  fontWeight: "300",
                  letterSpacing: "0.15em",
                }}
              >
                Every frame tells a story, every moment a memory
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
