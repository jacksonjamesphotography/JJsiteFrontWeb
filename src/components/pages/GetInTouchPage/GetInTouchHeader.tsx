"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function GetInTouchHeader() {
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 🌫️ Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && imageRef.current) {
        const rect = containerRef.current.getBoundingClientRect();

        // Calculate parallax based on section position
        const scrolled = -rect.top;
        const rate = scrolled * 0.5; // Adjust for parallax intensity

        imageRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] w-full"
    >
      {/* Sticky container that holds the image in place */}
      <div className="sticky top-0 h-[50vh] sm:h-[55vh] md:h-[60vh] w-full overflow-hidden">
        <section className="relative h-full w-full">
          {/* --- Image Layer with extra height for parallax --- */}
          <div className="absolute inset-0 h-[120%] -top-[10%] overflow-hidden">
            <div
              ref={imageRef}
              className="absolute inset-0 w-full h-full will-change-transform"
            >
              <Image
                src={
                  isMobile
                    ? "/images/GetInTouch/headerMobile.jpg"
                    : "/images/GetInTouch/headerdesktop2.jpg"
                }
                alt="Get in Touch"
                fill
                className="object-cover"
                priority
                quality={90}
              />
            </div>
          </div>

          {/* --- Overlay for readability --- */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          {/* --- Content Layer - Centered Quote --- */}
          <div className="relative z-20 h-full flex items-center justify-center px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12">
            <div className="max-w-4xl text-center">
              <h1
                className="leading-tight text-[28px] sm:text-[35px] md:text-[40px] lg:text-[45px]"
                style={{
                  fontFamily: "var(--font-family-display)",
                  fontWeight: "400",
                  color: "#e8d8c2",
                }}
              >
                Every story deserves to be <br />
                told beautifully, let&apos;s create <br />
                <span
                  className="text-[40px] sm:text-[50px] md:text-[58px] lg:text-[65px]"
                  style={{
                    fontFamily: "var(--font-family-script)",
                    fontWeight: "500",
                  }}
                >
                  yours together
                </span>
              </h1>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
