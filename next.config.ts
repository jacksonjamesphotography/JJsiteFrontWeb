import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "next-sanity",
    "@sanity/ui",
    "@sanity/vision",
    "sanity",
    "@sanity/preview-url-secret",
    "styled-components",
  ],
  compiler: {
    styledComponents: true,
  },
  webpack: (config, { isServer }) => {
    // Exclude Sanity from server-side bundle to prevent SSR issues
    if (isServer) {
      config.externals = config.externals || [];
      if (Array.isArray(config.externals)) {
        config.externals.push("sanity");
        config.externals.push("@sanity/ui");
        config.externals.push("@sanity/vision");
      } else {
        config.externals = [
          ...(config.externals || []),
          "sanity",
          "@sanity/ui",
          "@sanity/vision",
        ];
      }
    }

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
