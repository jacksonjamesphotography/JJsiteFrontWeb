"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

  // Close menu only when pathname actually changes (not on mount)
  useEffect(() => {
    if (pathname !== previousPathname.current && isOpen) {
      onClose();
      previousPathname.current = pathname;
    }
  }, [pathname, isOpen, onClose]);

  if (!isOpen) return null;

  // Split nav links: first 4 links into two columns (2 each), last one separate
  const leftLinks = NAV_LINKS.slice(0, 2);
  const rightLinks = NAV_LINKS.slice(2, 4);
  const contactLink = NAV_LINKS[4]; // "Get in Touch"

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 md:hidden"
        style={{ zIndex: 9998 }}
        onClick={onClose}
      />

      {/* Mobile Menu */}
      <div
        className="fixed inset-0 bg-[#242424] md:hidden overflow-y-auto"
        style={{ zIndex: 9999 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#68655a] hover:text-[#68655a]/70 transition-colors"
          aria-label="Close menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div className="flex flex-col items-center justify-between min-h-screen px-6 py-16">
          {/* Top Section - Logo */}
          <div className="flex flex-col items-center pt-8">
            <Image
              src="/images/logo/logo.png"
              alt="Logo"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>

          {/* Middle Section - Navigation Links */}
          <div className="flex flex-col items-center">
            {/* Horizontal Line */}
            <div className="w-full max-w-md h-[1px] bg-[#68655a]/30 mb-10"></div>

            {/* Navigation Links - Two Columns */}
            <div className="w-full max-w-md mb-6 relative">
              {/* Vertical Divider */}
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#68655a]/30 -translate-x-1/2"></div>

              <div className="grid grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="flex flex-col space-y-6 pr-4">
                  {leftLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={onClose}
                        className={`text-center uppercase tracking-wider transition-colors duration-300 ${
                          isActive
                            ? "text-[#68655a]"
                            : "text-[#68655a]/70 hover:text-[#68655a]"
                        }`}
                        style={{ fontFamily: "var(--font-family-body)" }}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>

                {/* Right Column */}
                <div className="flex flex-col space-y-6 pl-4">
                  {rightLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={onClose}
                        className={`text-center uppercase tracking-wider transition-colors duration-300 ${
                          isActive
                            ? "text-[#68655a]"
                            : "text-[#68655a]/70 hover:text-[#68655a]"
                        }`}
                        style={{ fontFamily: "var(--font-family-body)" }}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Get in Touch - Third Row, Centered and Larger */}
            {contactLink && (
              <div className="w-full max-w-md mb-10 flex justify-center">
                <Link
                  href={contactLink.href}
                  onClick={onClose}
                  className={`text-center uppercase tracking-wider transition-colors duration-300 text-lg ${
                    pathname === contactLink.href
                      ? "text-[#68655a]"
                      : "text-[#68655a]/70 hover:text-[#68655a]"
                  }`}
                  style={{ fontFamily: "var(--font-family-body)" }}
                >
                  {contactLink.name}
                </Link>
              </div>
            )}

            {/* Horizontal Line */}
            <div className="w-full max-w-md h-[1px] bg-[#68655a]/30"></div>
          </div>

          {/* Bottom Section - Unfiltered & Social Links */}
          <div className="flex flex-col items-center pb-8">
            {/* Unfiltered Text */}
            <div className="mb-8">
              <h3
                className="text-4xl text-[#68655a]"
                style={{ fontFamily: "var(--font-family-script)" }}
              >
                unfiltered
              </h3>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#68655a]/70 hover:text-[#68655a] transition-colors duration-300"
                  aria-label={social.name}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.iconPath} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
