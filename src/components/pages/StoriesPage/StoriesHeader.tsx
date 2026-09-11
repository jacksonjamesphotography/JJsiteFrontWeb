"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { SCROLL_IMAGES } from "@/lib/constants";

function StoriesHeader() {
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

      // Scroll to next image every 6 seconds
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
    setIsAutoScrolling(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
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

  const scrollToImage = (direction: "next" | "previous") => {
    if (!scrollRef.current) return;
    setIsAutoScrolling(false);
    const container = scrollRef.current;
    const imageElements = container.querySelectorAll(".scroll-image");

    if (imageElements.length === 0) return;

    const totalImages = imageElements.length;
    const nextIndex =
      direction === "next"
        ? (currentImageIndex + 1) % totalImages
        : (currentImageIndex - 1 + totalImages) % totalImages;
    const nextImage = imageElements[nextIndex] as HTMLElement;

    const imageRect = nextImage.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const scrollOffset =
      nextImage.offsetLeft - containerRect.width / 2 + imageRect.width / 2;

    container.scrollTo({
      left: scrollOffset,
      behavior: "smooth",
    });

    setCurrentImageIndex(nextIndex);
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  const scrollToNext = () => scrollToImage("next");
  const scrollToPrevious = () => scrollToImage("previous");

  return (
    <section
      className="w-full relative overflow-visible pb-12 sm:pb-16 md:pb-20"
      style={{ backgroundColor: "#f9f6f5" }}
    >
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide select-none h-[400px] sm:h-[500px] md:h-[700px] gap-2 sm:gap-2 md:gap-3 px-3 sm:px-4 md:px-6"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {SCROLL_IMAGES.map((image, index) => (
          <div
            key={index}
            className="scroll-image flex-shrink-0 relative overflow-hidden pointer-events-none h-full w-auto min-w-[280px] sm:min-w-[350px] md:min-w-[400px]"
          >
            <Image
              src={image}
              alt={`Scroll image ${index + 1}`}
              width={1400}
              height={1750}
              quality={92}
              className="h-full w-auto object-cover"
              style={{
                objectFit: "cover",
              }}
              sizes="(max-width: 640px) 85vw, (max-width: 768px) 420px, 560px"
              draggable={false}
              priority={index < 3}
            />
          </div>
        ))}
      </div>

      {/* Heading - SIGNATURE cut in half at bottom edge of images */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-end pointer-events-none">
        <div className="pointer-events-auto pr-4 sm:pr-8 md:pr-20 lg:pr-40 xl:pr-48">
          {/* Heading */}
          <h1
            className="text-right uppercase leading-tight text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[90px]"
            style={{
              fontFamily: "var(--font-family-heading)",
              color: "#2E2A22FF",
              fontWeight: "400",
            }}
          >
            <span
              className="inline-block"
              style={{
                transform: "translateY(75%)",
              }}
            >
              SIGNATURE
            </span>
            <br />
            <span
              className="inline-block"
              style={{
                transform: "translateY(70%)",
              }}
            >
              WORK
            </span>
          </h1>
        </div>
      </div>

      {/* Arrow Buttons - Right end bottom */}
      <div className="absolute bottom-0 right-0 pointer-events-none pr-2 sm:pr-6 md:pr-8 pb-12 sm:pb-3 md:pb-4">
        <div className="flex items-center gap-2 sm:gap-3 pointer-events-auto">
          <button
            type="button"
            onClick={scrollToPrevious}
            className="text-lg sm:text-xl md:text-2xl text-gray-700 hover:text-gray-900 transition-colors cursor-pointer px-1"
            aria-label="Previous image"
          >
            ←
          </button>
          <button
            type="button"
            onClick={scrollToNext}
            className="text-lg sm:text-xl md:text-2xl text-gray-700 hover:text-gray-900 transition-colors cursor-pointer px-1"
            aria-label="Next image"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default StoriesHeader;
