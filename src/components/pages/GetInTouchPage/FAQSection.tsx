"use client";

import { useState } from "react";
import { FAQS } from "@/lib/constants";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28"
      style={{ backgroundColor: "#ede6e0" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quote */}
        <p
          className="text-center text-[10px] sm:text-xs md:text-sm uppercase tracking-wider font-extralight text-gray-600 mb-4 sm:mb-6 md:mb-8"
          style={{ fontFamily: "var(--font-family-body)" }}
        >
          YOUR QUESTIONS, OUR ANSWERS
        </p>

        {/* Heading */}
        <h2
          className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-snug uppercase mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4"
          style={{
            fontFamily: "var(--font-family-display)",
            color: "#2E2E2E",
          }}
        >
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="border-b"
                style={{ borderColor: "#c2c5aa" }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-4 px-4 flex items-center justify-between text-left transition-all duration-300"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <span
                      className="text-xs sm:text-sm font-light tracking-wider"
                      style={{
                        fontFamily: "var(--font-family-body)",
                        color: "#6a6a6a",
                        minWidth: "30px",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p
                      className="text-xs sm:text-sm font-light uppercase tracking-wide flex-1"
                      style={{
                        fontFamily: "var(--font-family-body)",
                        color: "#2E2E2E",
                      }}
                    >
                      {faq.question}
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {isOpen ? (
                      <svg
                        className="w-5 h-5 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: "#2E2E2E" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M20 12H4"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: "#2E2E2E" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 pb-4 pl-16">
                    <p
                      className="text-xs sm:text-sm leading-relaxed"
                      style={{
                        fontFamily: "var(--font-family-body)",
                        fontWeight: "300",
                        color: "#6a6a6a",
                        textAlign: "justify",
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
