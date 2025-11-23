"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Small delay to ensure smooth appearance
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleCancel = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      className="fixed bottom-4 right-4 left-4 md:left-auto md:bottom-6 md:right-6 z-[9999]"
      style={{
        animation: "fadeInUp 0.5s ease-out",
        transform: "translateZ(0)",
        willChange: "transform",
      }}
    >
      <div
        className="shadow-lg rounded-lg border border-gray-200 p-4 md:p-5 max-w-full md:max-w-[360px] mx-auto md:mx-0"
        style={{
          backgroundColor: "#faf9f6",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Cookie Icon */}
        <div className="flex items-start gap-3 mb-3">
          <div className="flex-shrink-0 mt-0.5">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ color: "#2E2E2E" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h3
              className="text-sm md:text-base font-normal mb-1.5"
              style={{
                fontFamily: "var(--font-family-display)",
                color: "#2E2E2E",
              }}
            >
              Cookie Consent
            </h3>
            <p
              className="text-xs md:text-sm leading-relaxed mb-4"
              style={{
                fontFamily: "var(--font-family-body)",
                color: "#6B7280",
              }}
            >
              We use cookies to enhance your browsing experience and analyze
              site traffic. By clicking &quot;I Accept&quot;, you consent to our
              use of cookies.{" "}
              <Link
                href="/privacy-policy"
                className="underline inline"
                style={{ color: "#2E2E2E" }}
              >
                Learn more
              </Link>
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 md:gap-3">
          <button
            onClick={handleCancel}
            className="flex-1 px-4 py-2 text-xs md:text-sm font-thin uppercase tracking-widest border-2 transition-all duration-300 hover:bg-[#2E2E2E] hover:text-[#faf9f6] cursor-pointer"
            style={{
              fontFamily: "var(--font-family-body)",
              letterSpacing: "0.2em",
              borderColor: "#2E2E2E",
              color: "#2E2E2E",
              backgroundColor: "transparent",
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 px-4 py-2 text-xs md:text-sm font-thin uppercase tracking-widest border-2 transition-all duration-300 hover:bg-transparent hover:text-[#2E2E2E] cursor-pointer"
            style={{
              fontFamily: "var(--font-family-body)",
              letterSpacing: "0.2em",
              borderColor: "#2E2E2E",
              backgroundColor: "#2E2E2E",
              color: "#faf9f6",
            }}
          >
            I Accept
          </button>
        </div>
      </div>
    </div>
  );
}
