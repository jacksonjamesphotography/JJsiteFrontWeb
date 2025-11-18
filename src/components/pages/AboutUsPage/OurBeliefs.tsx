"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { OUR_BELIEFS_ITEMS } from "@/lib/constants";

type BeliefItem = (typeof OUR_BELIEFS_ITEMS)[number];

const FADE_DURATION = 700;

function OurBeliefs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = OUR_BELIEFS_ITEMS.length;
  const currentBelief = OUR_BELIEFS_ITEMS[activeIndex];

  const activeIndexRef = useRef(activeIndex);
  const fadeFrameRef = useRef<number | null>(null);
  const fadeStartRef = useRef<number | null>(null);

  const [previousBelief, setPreviousBelief] = useState<BeliefItem | null>(null);
  const [fadeProgress, setFadeProgress] = useState(1);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const runFade = useCallback((timestamp: number) => {
    if (fadeStartRef.current === null) {
      fadeStartRef.current = timestamp;
    }

    const elapsed = timestamp - fadeStartRef.current;
    const progress = Math.min(elapsed / FADE_DURATION, 1);

    setFadeProgress(progress);

    if (progress < 1) {
      fadeFrameRef.current = window.requestAnimationFrame(runFade);
    } else {
      fadeFrameRef.current = null;
      fadeStartRef.current = null;
      setPreviousBelief(null);
    }
  }, []);

  const goTo = useCallback(
    (getNextIndex: (prev: number) => number) => {
      if (fadeFrameRef.current !== null) {
        window.cancelAnimationFrame(fadeFrameRef.current);
      }

      const currentIndex = activeIndexRef.current;
      const nextIndex = getNextIndex(currentIndex);

      if (nextIndex === currentIndex) return;

      setPreviousBelief(OUR_BELIEFS_ITEMS[currentIndex]);
      setFadeProgress(0);
      setActiveIndex(nextIndex);
      activeIndexRef.current = nextIndex;

      fadeStartRef.current = null;
      fadeFrameRef.current = window.requestAnimationFrame(runFade);
    },
    [runFade]
  );

  const handlePrevious = useCallback(() => {
    goTo((prev) => (prev - 1 + totalItems) % totalItems);
  }, [goTo, totalItems]);

  const handleNext = useCallback(() => {
    goTo((prev) => (prev + 1) % totalItems);
  }, [goTo, totalItems]);

  useEffect(() => {
    const autoAdvance = setInterval(() => {
      goTo((prev) => (prev + 1) % totalItems);
    }, 6000);

    return () => clearInterval(autoAdvance);
  }, [goTo, totalItems]);

  useEffect(() => {
    return () => {
      if (fadeFrameRef.current !== null) {
        window.cancelAnimationFrame(fadeFrameRef.current);
      }
    };
  }, []);

  const previousOpacity = previousBelief ? 1 - fadeProgress : 0;
  const currentOpacity = previousBelief ? fadeProgress : 1;

  const renderBeliefText = useCallback((belief: BeliefItem) => {
    return (
      <div className="w-full max-w-[320px] sm:max-w-none mx-auto sm:mx-0">
        <p
          className="text-[10px] sm:text-xs md:text-sm uppercase tracking-widest font-light text-gray-600"
          style={{ fontFamily: "var(--font-family-body)" }}
        >
          WE BELIEVE
        </p>

        <div className="mt-3">
          <h3
            className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-normal leading-tight"
            style={{
              fontFamily: "var(--font-family-display)",
              color: "#2E2E2E",
            }}
          >
            {belief.titleLines.map(({ text, isScript }) => (
              <span
                key={`${belief.image}-${text}`}
                className="block"
                style={
                  isScript
                    ? {
                        fontFamily: "var(--font-family-script)",
                        fontSize: "1.05em",
                      }
                    : undefined
                }
              >
                {isScript ? text.toLowerCase() : text}
              </span>
            ))}
          </h3>
        </div>

        <blockquote
          className="mt-5 text-[11px] sm:text-xs md:text-sm leading-relaxed text-gray-700"
          style={{ fontFamily: "var(--font-family-body)" }}
        >
          {belief.quote}
        </blockquote>

        <p
          className="mt-5 text-[11px] sm:text-xs md:text-sm leading-relaxed text-gray-700 text-justify sm:text-left"
          style={{ fontFamily: "var(--font-family-body)" }}
        >
          {belief.description}
        </p>
      </div>
    );
  }, []);

  return (
    <section
      className="w-full py-12 sm:py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: "#f9f6f5" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro text */}
        <p
          className="text-center text-[10px] sm:text-xs md:text-sm uppercase tracking-wider font-extralight text-gray-600 mb-4 sm:mb-6 md:mb-8"
          style={{ fontFamily: "var(--font-family-body)" }}
        >
          grounded in purpose and heart
        </p>

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal uppercase leading-snug"
            style={{
              fontFamily: "var(--font-family-display)",
              color: "#2E2E2E",
            }}
          >
            Our <span className="italic">Beliefs</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center lg:items-start">
          {/* Image carousel */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="w-full max-w-[320px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[360px]">
              <div className="relative aspect-[3/4] w-full">
                {previousBelief && (
                  <Image
                    key={`prev-image-${previousBelief.image}`}
                    src={previousBelief.image}
                    alt={`Previous ${previousBelief.titleLines
                      .map(({ text }) => text)
                      .join(" ")}`}
                    fill
                    className="absolute inset-0 object-cover shadow-md brightness-105"
                    style={{ opacity: previousOpacity }}
                    priority
                    sizes="(min-width: 1024px) 22rem, (min-width: 768px) 18rem, 85vw"
                  />
                )}

                <Image
                  key={`current-image-${currentBelief.image}`}
                  src={currentBelief.image}
                  alt={currentBelief.titleLines
                    .map(({ text }) => text)
                    .join(" ")}
                  fill
                  className="absolute inset-0 object-cover shadow-md brightness-105"
                  style={{ opacity: currentOpacity }}
                  priority
                  sizes="(min-width: 1024px) 22rem, (min-width: 768px) 18rem, 85vw"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 flex flex-col h-full">
            <div className="relative w-full">
              {previousBelief && (
                <div
                  key={`prev-text-${previousBelief.image}`}
                  className="absolute inset-0"
                  style={{ opacity: previousOpacity, pointerEvents: "none" }}
                >
                  {renderBeliefText(previousBelief)}
                </div>
              )}

              <div
                key={`current-text-${currentBelief.image}`}
                style={{ opacity: currentOpacity }}
              >
                {renderBeliefText(currentBelief)}
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex w-full max-w-[320px] sm:max-w-none mx-auto sm:mx-0 items-center gap-4 sm:gap-6 justify-start">
              <button
                type="button"
                onClick={handlePrevious}
                className="text-xl sm:text-2xl text-gray-700 hover:text-gray-900 transition-colors cursor-pointer px-1"
                aria-label="Previous belief"
              >
                ←
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="text-xl sm:text-2xl text-gray-700 hover:text-gray-900 transition-colors cursor-pointer px-1"
                aria-label="Next belief"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurBeliefs;
