"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ABOUT_US_HEADER_SCROLL_IMAGES } from "@/lib/constants";

function HeaderScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll functionality - slideshow style with center focus
  useEffect(() => {
    if (isAutoScrolling && scrollRef.current) {
      const scrollToImage = () => {
        if (scrollRef.current) {
          const container = scrollRef.current;
          const imageElements = container.querySelectorAll(".scroll-image");

          if (imageElements.length === 0) return;

          // Get next image index
          const nextIndex = (currentImageIndex + 1) % imageElements.length;
          const nextImage = imageElements[nextIndex] as HTMLElement;

          // Calculate scroll position to center the image
          const imageRect = nextImage.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          const scrollOffset =
            nextImage.offsetLeft -
            containerRect.width / 2 +
            imageRect.width / 2;

          // Scroll to center the image
          container.scrollTo({
            left: scrollOffset,
            behavior: "smooth",
          });

          setCurrentImageIndex(nextIndex);
        }
      };

      // Scroll to next image every 3 seconds (2 seconds display + 1 second scroll)
      autoScrollIntervalRef.current = setInterval(scrollToImage, 7000);
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isAutoScrolling, currentImageIndex]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setIsAutoScrolling(false); // Pause auto-scroll when user interacts
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Resume auto-scroll after a delay
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (!isDragging) {
      setTimeout(() => setIsAutoScrolling(true), 3000);
    }
  };

  const handleTouchStart = () => {
    setIsAutoScrolling(false);
  };

  const handleTouchEnd = () => {
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  return (
    <section
      className="w-full relative overflow-hidden"
      style={{ backgroundColor: "#ede6e0" }}
    >
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide select-none"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          cursor: isDragging ? "grabbing" : "grab",
          height: "50vh",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {ABOUT_US_HEADER_SCROLL_IMAGES.map((image, index) => (
          <div
            key={index}
            className="scroll-image flex-shrink-0 relative overflow-hidden pointer-events-none h-full w-auto"
          >
            <Image
              src={image}
              alt={`About us header ${index + 1}`}
              width={1400}
              height={1400}
              quality={92}
              className="h-full w-auto object-cover"
              style={{
                objectFit: "cover",
              }}
              sizes="(max-width: 768px) 70vw, 50vh"
              draggable={false}
              priority={index < 3}
            />
          </div>
        ))}
      </div>

      {/* Centered Heading */}
      <div className="absolute bottom-12 sm:bottom-16 md:bottom-20 left-0 right-0 flex items-center justify-center pointer-events-none">
        <h1
          className="text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4"
          style={{
            fontFamily: "var(--font-family-display)",
          }}
        >
          From fleeting{" "}
          <span style={{ fontFamily: "var(--font-family-script)" }}>
            moments
          </span>
          <br className="md:hidden" /> to forever{" "}
          <span style={{ fontFamily: "var(--font-family-script)" }}>
            memories
          </span>
        </h1>
      </div>
    </section>
  );
}

export default HeaderScroll;
