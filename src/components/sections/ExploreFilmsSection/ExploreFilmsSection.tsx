"use client";

import { useRef, useEffect, useState } from "react";

export default function ExploreFilmsSection() {
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
    <div ref={containerRef} className="relative h-screen w-full">
      {/* Sticky container that holds the video in place */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <section ref={sectionRef} className="relative h-full w-full">
          {/* --- Video Layer with extra height for parallax --- */}
          <div className="absolute inset-0 h-[120vh] -top-[10vh] overflow-hidden">
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

          {/* --- Content Layer --- */}
          <div className="relative z-20 h-full flex flex-col justify-between p-6 md:p-8 lg:p-12">
            {/* 🔹 Top Section */}
            <div className="flex justify-between items-start">
              {/* Top Left Heading */}
              <div className="flex-1">
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light  tracking-wider text-white"
                  style={{ fontFamily: "var(--font-family-display)" }}
                >
                  <span
                    className="italic"
                    style={{ fontFamily: "var(--font-family-hurricane)" }}
                  >
                    Explore
                  </span>{" "}
                  Films
                </h2>
              </div>

              {/* Top Right Text */}
              <div className="ml-8">
                <p
                  className="text-white uppercase tracking-widest text-sm md:text-base"
                  style={{
                    fontFamily: "var(--font-family-body)",
                    fontWeight: "100",
                  }}
                >
                  unfiltered memories
                </p>
              </div>
            </div>

            {/* 🔹 Bottom Right Button */}
            <div className="flex justify-end">
              <button
                className="px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm md:text-base"
                style={{
                  fontFamily: "var(--font-family-body)",
                  fontWeight: "100",
                }}
              >
                View Films
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
