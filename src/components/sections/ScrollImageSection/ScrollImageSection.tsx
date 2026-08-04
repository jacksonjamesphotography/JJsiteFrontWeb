"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { SCROLL_IMAGES } from "@/lib/constants";

function ScrollImageSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
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
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <section
      className="w-full py-8 sm:py-12 md:py-20"
      style={{ backgroundColor: "#ede6e0" }}
    >
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide gap-2 sm:gap-2 md:gap-3 px-3 sm:px-4 md:px-6 select-none"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {SCROLL_IMAGES.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 relative overflow-hidden shadow-lg pointer-events-none h-[400px] sm:h-[500px] md:h-[700px] w-auto min-w-[280px] sm:min-w-[350px] md:min-w-[400px]"
          >
            <Image
              src={image}
              alt={`Scroll image ${index + 1}`}
              width={800}
              height={1000}
              quality={75}
              loading="lazy"
              sizes="(max-width: 640px) 80vw, (max-width: 768px) 350px, 400px"
              className="h-full w-auto object-cover"
              style={{
                objectFit: "cover",
              }}
              draggable={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ScrollImageSection;
