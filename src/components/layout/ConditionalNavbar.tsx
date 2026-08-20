"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function ConditionalNavbar() {
  const pathname = usePathname();
  
  // Hide navbar on studio and PDF export routes
  if (
    pathname?.startsWith("/studio") ||
    pathname?.startsWith("/pdf-portfolio")
  ) {
    return null;
  }
  
  return <Navbar />;
}

