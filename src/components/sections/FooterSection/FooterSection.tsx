"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ROUTES, FOOTER_BG_IMAGE, footerLinks } from "@/lib/constants";

// Array of footer background images
const FOOTER_BG_IMAGES = [
  "/images/Footer/footerBg.jpg",
  "/images/Footer/footerBg3.jpg",
  "/images/Footer/footerBg4.jpeg",
  "/images/Footer/footerBg5.jpg",
  "/images/Footer/footerBg6.jpg",
  "/images/Footer/footerBg7.jpg",
];

function FooterSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % FOOTER_BG_IMAGES.length;
        return nextIndex;
      });
    }, 9000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* First Section - CTA with Background */}
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        {/* Background Images with fade transition — only current + next */}
        {FOOTER_BG_IMAGES.map((image, index) => {
          const nextIndex = (currentImageIndex + 1) % FOOTER_BG_IMAGES.length;
          if (index !== currentImageIndex && index !== nextIndex) return null;

          return (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt="Footer Background"
                fill
                quality={75}
                className="object-cover"
                loading="lazy"
                sizes="100vw"
              />
            </div>
          );
        })}

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "#8b7355", opacity: 0.7 }}
        />

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
          {/* Heading */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-medium mb-6 md:mb-8"
            style={{
              fontFamily: "var(--font-family-script)",
              color: "#FFFFFFFF",
            }}
          >
            Ready to immortalize <br /> your love story?
          </h2>

          {/* Paragraph */}
          <p
            className="text-[10px] md:text-xs lg:text-sm uppercase tracking-widest mb-8 md:mb-10"
            style={{
              fontFamily: "var(--font-family-body)",
              letterSpacing: "0.2em",
              color: "#FFFFFFFF",
            }}
          >
            Reach out to us now and let&apos;s start planning together!
          </p>

          {/* CTA Button with Arrow */}
          <a
            href={ROUTES.CONTACT}
            className="inline-flex items-center gap-3 px-8 py-4 text-sm font-thin tracking-widest uppercase transition-all duration-300 text-[#FFFFFFFF] border-2 border-[#FFFFFFFF] hover:bg-white hover:text-black group"
            style={{
              fontFamily: "var(--font-family-body)",
              letterSpacing: "0.2em",
            }}
          >
            Get In Touch
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Divider Line with Logo */}
      <div className="relative w-full h-0 z-10">
        <div className="absolute inset-x-0 flex items-center justify-center px-6 -translate-y-1/2">
          {/* Left Line */}
          <div
            className="flex-1 h-[2px]"
            style={{ backgroundColor: "#f5e6d3" }}
          />

          {/* Logo */}
          <div className="mx-6 md:mx-8 relative z-20">
            <Image
              src="/images/logo/logo.png"
              alt="Logo"
              width={160}
              height={160}
              quality={90}
              loading="lazy"
              className="object-contain"
            />
          </div>

          {/* Right Line */}
          <div
            className="flex-1 h-[2px]"
            style={{ backgroundColor: "#f5e6d3" }}
          />
        </div>
      </div>

      {/* Second Section - Main Footer */}
      <section
        className="relative w-full pt-8 md:pt-8 lg:pt-24 pb-0"
        style={{ backgroundColor: "#6B5542FF" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading Text */}
          <h3
            className="text-xl md:text-2xl lg:text-3xl font-medium text-center mb-12 md:mb-16 italic max-w-4xl mx-auto leading-snug"
            style={{
              fontFamily: "var(--font-family-heading)",
              color: "#FFFFFFFF",
            }}
          >
            Documenting the moments you&apos;ll cherish forever, because
            let&apos;s <br className="hidden md:block" />
            face it, you&apos;ll need proof for the &apos;remember when&apos;
            debates!
          </h3>

          {/* Mobile/Tablet Layout */}
          <div className="block lg:hidden">
            {/* Images Grid - 2x2 for Mobile */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 max-w-md mx-auto">
              {[1, 2, 3, 4].map((num) => (
                <a
                  key={num}
                  href="https://instagram.com/jacksonjamesphotography"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full aspect-square overflow-hidden transition-opacity duration-300 hover:opacity-80"
                >
                  <Image
                    src={`/images/Footer/footer${num}.jpg`}
                    alt={`Footer Image ${num}`}
                    fill
                    className="object-cover"
                  />
                </a>
              ))}
            </div>

            {/* Navigation Links - 2 Columns */}
            <nav className="mb-6">
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3 max-w-md mx-auto">
                {footerLinks.map((link, index) => (
                  <li key={index} className="text-center">
                    <a
                      href={link.href}
                      className="text-[10px] md:text-xs font-thin uppercase tracking-widest text-white hover:text-gray-300 transition-colors duration-300"
                      style={{
                        fontFamily: "var(--font-family-body)",
                        letterSpacing: "0.15em",
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social Icons - Centered in Mobile */}
            <div className="flex justify-center items-center gap-6 md:gap-8 mb-6 px-6">
              {/* Instagram */}
              <a
                href="https://instagram.com/jacksonjamesphotography"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/channel/UCWZ-4euafoIplCpACJPGHHw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            {/* Instagram Handle */}
            <p
              className="text-[10px] md:text-xs font-thin uppercase tracking-widest text-white text-center mb-6"
              style={{
                fontFamily: "var(--font-family-body)",
                letterSpacing: "0.15em",
              }}
            >
              @JACKSONJAMESPHOTOGRAPHY
            </p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            {/* Navigation Links */}
            <nav className="mb-1 md:mb-2">
              <ul className="flex flex-wrap justify-center items-center gap-12 md:gap-14 lg:gap-22">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-[10px] md:text-xs font-thin uppercase tracking-widest text-white hover:text-gray-300 transition-colors duration-300"
                      style={{
                        fontFamily: "var(--font-family-body)",
                        letterSpacing: "0.15em",
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer Images */}
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 ml-4 md:ml-6">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="relative flex items-center gap-2">
                  {/* Instagram Handle - Only show for first image */}
                  {num === 1 && (
                    <div
                      className="text-[8px] md:text-[9px] font-thin uppercase tracking-widest text-white"
                      style={{
                        fontFamily: "var(--font-family-body)",
                        letterSpacing: "0.15em",
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                      }}
                    >
                      @JACKSONJAMESPHOTOGRAPHY
                    </div>
                  )}

                  {/* Image */}
                  <a
                    href="https://instagram.com/jacksonjamesphotography"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 overflow-hidden transition-opacity duration-300 hover:opacity-80"
                  >
                    <Image
                      src={`/images/Footer/footer${num}.jpg`}
                      alt={`Footer Image ${num}`}
                      fill
                      className="object-cover"
                    />
                  </a>

                  {/* Social Icons - Only show for last image */}
                  {num === 4 && (
                    <div className="flex flex-col gap-4 md:gap-5">
                      {/* Instagram */}
                      <a
                        href="https://instagram.com/jacksonjamesphotography"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-300 transition-colors"
                      >
                        <svg
                          className="w-3 h-3 md:w-4 md:h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>

                      {/* YouTube */}
                      <a
                        href="https://www.youtube.com/channel/UCWZ-4euafoIplCpACJPGHHw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-300 transition-colors"
                      >
                        <svg
                          className="w-3 h-3 md:w-4 md:h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer Tagline */}
          <p
            className="text-[10px] md:text-xs font-thin uppercase tracking-widest text-white text-center mt-8 md:mt-10"
            style={{
              fontFamily: "var(--font-family-body)",
              letterSpacing: "0.2em",
            }}
          >
            INTERNATIONAL DESTINATION WEDDING PHOTOGRAPHERS & FILMMAKERS
          </p>
        </div>

        {/* Horizontal Line - Full Width */}
        <div className="w-full mt-4 md:mt-5 mb-3 md:mb-4">
          <div
            className="w-full h-[1px]"
            style={{ backgroundColor: "#f5e6d3" }}
          />
        </div>

        {/* Copyright and Credits - Full Width */}
        <div className="w-full px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-4 text-white pb-4 md:pb-5">
            {/* Left - Copyright */}
            <p
              className="text-[8px] md:text-[9px] font-thin uppercase tracking-wider text-center lg:text-left w-full lg:w-auto"
              style={{
                fontFamily: "var(--font-family-body)",
                letterSpacing: "0.15em",
              }}
            >
              COPYRIGHT © 2025 JACKSON JAMES PHOTOGRAPHY
              <span className="hidden lg:inline"> | </span>
              <span className="block lg:inline mt-1 lg:mt-0">
                <a
                  href="/privacy-policy"
                  className="text-white hover:text-white hover:underline transition-all duration-300"
                >
                  PRIVACY POLICY
                </a>
              </span>
            </p>

            {/* Right - Website Credits */}
            <p
              className="text-[9px] md:text-[10px] font-thin tracking-wider text-center lg:text-right w-full lg:w-auto"
              style={{
                fontFamily: "var(--font-family-body)",
                letterSpacing: "0.15em",
              }}
            >
              Website Designed by{" "}
              <a
                href="https://instagram.com/sshashank_singh_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white hover:underline transition-all duration-300"
                style={{
                  fontFamily: "var(--font-family-heading)",
                }}
              >
                Shashank Singh
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Back to Top Button - Only in Footer */}
      <div className="relative">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute -top-16 md:-top-28 right-4 md:right-8 w-9 h-9 md:w-12 md:h-12 rounded-full bg-transparent border border-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:border-white z-10 group"
          aria-label="Back to top"
        >
          <svg
            className="w-4 h-4 md:w-6 md:h-6 text-white group-hover:text-[#6B5542FF] transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default FooterSection;
