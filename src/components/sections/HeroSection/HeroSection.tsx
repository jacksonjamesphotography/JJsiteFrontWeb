"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HERO_IMAGES } from "@/lib/constants";

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % HERO_IMAGES.length;
        console.log(`Switching from image ${prevIndex} to ${nextIndex}`);
        return nextIndex;
      });
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Images with fade transition */}
      {HERO_IMAGES.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt="Hero Background"
            fill
            priority={index === 0} // Only first image gets priority
            loading={index === 0 ? "eager" : "lazy"}
            quality={90} // High quality for hero images
            className="object-cover"
            sizes="100vw" // Full viewport width
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Grain Overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Centered Heading */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 space-y-6">
        <h1
          className="text-white text-6xl md:text-7xl lg:text-8xl text-center font-light tracking-wide"
          style={{
            fontFamily: "var(--font-family-heading)",
            textShadow:
              "0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.2)",
          }}
        >
          Crafting <br />
          <span className="font-semibold text-gray-300">
            Meaningful{" "}
            <span style={{ fontFamily: "var(--font-family-hurricane)" }}>
              Narratives
            </span>
          </span>
        </h1>
        <p
          className="text-white/60 text-[10px] md:text-xs lg:text-sm text-center max-w-xl font-thin uppercase tracking-wider"
          style={{
            fontFamily: "var(--font-family-body)",
            textShadow: "0 0 15px rgba(255, 255, 255, 0.2)",
          }}
        >
          Every frame tells a story, every moment resonates with purpose
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
