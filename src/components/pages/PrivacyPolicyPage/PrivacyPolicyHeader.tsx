"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function PrivacyPolicyHeader() {
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

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && imageRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrolled = -rect.top;
        const rate = scrolled * 0.5;

        imageRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] w-full"
    >
      <div className="sticky top-0 h-[40vh] sm:h-[45vh] md:h-[50vh] w-full overflow-hidden">
        <section className="relative h-full w-full">
          <div className="absolute inset-0 h-[120%] -top-[10%] overflow-hidden">
            <div
              ref={imageRef}
              className="absolute inset-0 w-full h-full will-change-transform"
            >
              <Image
                src={
                  isMobile
                    ? "/images/GetInTouch/headerMobile.jpg"
                    : "/images/GetInTouch/headerDesktop.jpeg"
                }
                alt="Privacy Policy"
                fill
                className="object-cover"
                priority
                quality={90}
              />
            </div>
          </div>

          <div className="absolute inset-0 bg-black/50 z-10"></div>

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
                Privacy Policy
              </h1>
              <p
                className="text-[10px] md:text-xs lg:text-sm uppercase tracking-widest mt-4"
                style={{
                  fontFamily: "var(--font-family-body)",
                  letterSpacing: "0.2em",
                  color: "#e8d8c2",
                }}
              >
                Your Privacy Matters to Us
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

