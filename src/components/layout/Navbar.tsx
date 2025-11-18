"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-[#f9f6f5] shadow-md border-b border-[#f9f6f5]"
            : "bg-transparent backdrop-blur-[2px] border-b border-white/10"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-2 md:py-3">
          {" "}
          {/* reduced padding */}
          <div className="flex items-center">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 relative w-[125px] h-[85px]" // reduced logo size
            >
              {/* White Logo */}
              <Image
                src="/images/logo/logo.png"
                alt="Logo"
                fill
                className={`object-contain transition-opacity duration-500 ease-in-out ${
                  isScrolled ? "opacity-0" : "opacity-100"
                }`}
              />
              {/* Black Logo */}
              <Image
                src="/images/logo/logoblack.png"
                alt="Logo"
                fill
                className={`object-contain transition-opacity duration-500 ease-in-out ${
                  isScrolled ? "opacity-100" : "opacity-0"
                }`}
              />
            </Link>

            {/* Navigation Links - Pushed to Right */}
            <div className="hidden md:flex items-center space-x-8 ml-auto">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`font-heading font-light text-sm uppercase tracking-wider transition-all duration-500 ease-in-out relative group ${
                      isScrolled
                        ? isActive
                          ? "text-[#2E2E2E]"
                          : "text-[#2E2E2E]/70 hover:text-[#2E2E2E]"
                        : isActive
                          ? "text-white"
                          : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute left-0 -bottom-1 w-full h-[1px] transform origin-left transition-all duration-500 ease-in-out ${
                        isScrolled ? "bg-[#2E2E2E]" : "bg-white"
                      } ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    ></span>
                  </Link>
                );
              })}
            </div>

            {/* Extreme Right End - Social Links (Visible on Scroll) */}
            <div
              className={`hidden md:flex items-center ml-6 transition-all duration-500 ease-in-out ${
                isScrolled
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4 pointer-events-none"
              }`}
            >
              {/* Vertical Separator Bar */}
              <div className="w-[1px] h-6 bg-[#2E2E2E]/30 mr-5"></div>

              {/* Social Icons */}
              <div className="flex items-center space-x-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2E2E2E]/60 hover:text-[#2E2E2E] transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.iconPath} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden ml-auto transition-colors duration-500 ease-in-out ${
                isScrolled
                  ? "text-[#2E2E2E] hover:text-[#2E2E2E]/70"
                  : "text-white hover:text-white/70"
              }`}
              aria-label="Menu"
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
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Outside nav to avoid z-index stacking issues */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
