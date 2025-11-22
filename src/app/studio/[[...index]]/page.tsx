"use client";

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
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <NextStudio config={config as any} />
    </div>
  );
}
