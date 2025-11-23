"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import config from "@/lib/sanity/studio.config";

const NextStudio = dynamic(
  () => import("next-sanity/studio").then((mod) => mod.NextStudio),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center min-h-screen">
        <div>Loading Studio...</div>
      </div>
    ),
  }
);

export default function StudioPage() {
  useEffect(() => {
    // Suppress React key warnings from Sanity Studio's internal components
    const originalError = console.error;
    console.error = (...args: any[]) => {
      if (
        typeof args[0] === "string" &&
        args[0].includes("Each child in a list should have a unique")
      ) {
        return; // Suppress this specific warning
      }
      originalError.apply(console, args);
    };

    return () => {
      console.error = originalError;
    };
  }, []);

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <NextStudio config={config as any} />
    </div>
  );
}
