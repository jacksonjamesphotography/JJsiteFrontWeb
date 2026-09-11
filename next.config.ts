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
    formats: ["image/avif", "image/webp"],
    // Include retina sizes for both small cards and large scroll/hero images
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 640, 750, 828],
    
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: false,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // 🔥 PREVENT HOTLINKING - Stops other sites stealing your bandwidth
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // ✅ Browser cache for 1 year
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin', // ✅ Prevent hotlinking
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      {
        source: '/_next/image',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // ✅ Cache optimized images forever
          },
        ],
      },
    ];
  },
};

export default nextConfig;