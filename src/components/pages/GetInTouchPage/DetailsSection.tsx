"use client";

import { useState } from "react";

export default function DetailsSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const addressText =
    "Jackson James photography, 475 (1st floor), 11th cross road, Panampilly nagar, Kochi-268036";
  const phoneText = "+91-7012481354";
  const emailText = "mail@jacksonjames.in";

  return (
    <section
      className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28"
      style={{ backgroundColor: "#f9f6f5" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16">
          {/* Location */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <svg
                className="w-10 h-10 md:w-12 md:h-12"
                fill="currentColor"
                viewBox="0 0 24 24"
                style={{ color: "#6A4F3D" }}
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <p
              className="text-xs sm:text-sm uppercase tracking-wide mb-2"
              style={{
                fontFamily: "var(--font-family-body)",
                fontWeight: "400",
                color: "#6A4F3D",
              }}
            >
              ADDRESS
            </p>
            <div>
              <a
                href="https://www.google.com/maps/place/9%C2%B057'37.1%22N+76%C2%B017'50.3%22E/@9.960311,76.2966733,19z/data=!3m1!4b1!4m4!3m3!8m2!3d9.960311!4d76.297317?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm md:text-base leading-relaxed mb-2 hover:opacity-70 transition-opacity block"
                style={{
                  fontFamily: "var(--font-family-body)",
                  fontWeight: "300",
                  color: "#6A4F3D",
                  textDecoration: "none",
                }}
              >
                Jackson James photography, <br />
                475 (1st floor), 11th cross road, <br />
                Panampilly nagar, Kochi-268036
              </a>
              <div className="flex justify-center">
                <button
                  onClick={() => copyToClipboard(addressText, "address")}
                  className="hover:opacity-70 transition-opacity"
                  aria-label="Copy address"
                >
                  {copied === "address" ? (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: "#6A4F3D" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: "#6A4F3D" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <svg
                className="w-10 h-10 md:w-12 md:h-12"
                fill="currentColor"
                viewBox="0 0 24 24"
                style={{ color: "#6A4F3D" }}
              >
                <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z" />
              </svg>
            </div>
            <div
              className="text-xs sm:text-sm md:text-base leading-relaxed"
              style={{
                fontFamily: "var(--font-family-body)",
                fontWeight: "300",
              }}
            >
              <span
                className="block mb-1 uppercase tracking-wide"
                style={{
                  fontFamily: "var(--font-family-body)",
                  fontWeight: "400",
                  color: "#6A4F3D",
                }}
              >
                PHONE NUMBER
              </span>
              <div className="flex items-center gap-2 justify-center">
                <a
                  href="tel:+917012481354"
                  className="hover:opacity-70 transition-opacity"
                  style={{ color: "#6A4F3D" }}
                >
                  +91-7012481354
                </a>
                <button
                  onClick={() => copyToClipboard(phoneText, "phone")}
                  className="flex-shrink-0 hover:opacity-70 transition-opacity"
                  aria-label="Copy phone number"
                >
                  {copied === "phone" ? (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: "#6A4F3D" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: "#6A4F3D" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <svg
                className="w-10 h-10 md:w-12 md:h-12"
                fill="currentColor"
                viewBox="0 0 24 24"
                style={{ color: "#6A4F3D" }}
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <p
              className="text-xs sm:text-sm uppercase tracking-wide mb-2"
              style={{
                fontFamily: "var(--font-family-body)",
                fontWeight: "400",
                color: "#6A4F3D",
              }}
            >
              EMAIL ID
            </p>
            <div className="flex items-center gap-2 justify-center">
              <a
                href="mailto:mail@jacksonjames.in"
                className="hover:opacity-70 transition-opacity text-xs sm:text-sm md:text-base"
                style={{
                  fontFamily: "var(--font-family-body)",
                  fontWeight: "300",
                  color: "#6A4F3D",
                }}
              >
                mail@jacksonjames.in
              </a>
              <button
                onClick={() => copyToClipboard(emailText, "email")}
                className="flex-shrink-0 hover:opacity-70 transition-opacity"
                aria-label="Copy email"
              >
                {copied === "email" ? (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: "#6A4F3D" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: "#6A4F3D" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15715.123456789!2d76.297317!3d9.960311!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTcnMzcuMSJOIDc2wrAxNyc1MC4zIkU!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Jackson James Photography Location , Cochin, Kerala"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
