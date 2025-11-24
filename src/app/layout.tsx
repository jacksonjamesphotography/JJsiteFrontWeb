import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "../styles/globals.css";
// import Navbar from "@/components/layout/Navbar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ConditionalNavbar from "@/components/layout/ConditionalNavbar";
import CookieConsent from "@/components/layout/CookieConsent";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: {
    default:
      "Jackson James Wedding Photographer | Best Wedding Photographer in Kochi, Kerala & India",
    template: "%s | Jackson James Photography",
  },
  description:
    "Award-winning wedding photographer capturing authentic moments and emotions. Top wedding photographer in Kochi, Kerala, and India. Professional destination wedding photographer for luxury weddings worldwide.",
  keywords: [
    "Wedding Photographer Kochi",
    "Wedding Photographer Kerala",
    "Candid Wedding Photographer",
    "Destination Wedding Photographer India",
    "Best Wedding Photographer in Kerala",
    "Professional Wedding Photographer",
  ],
  icons: {
    icon: [
      { url: "/icons/iconLogo.png", type: "image/png", sizes: "any" },
      { rel: "icon", url: "/icons/iconLogo.png", type: "image/png" },
      { rel: "shortcut icon", url: "/icons/iconLogo.png", type: "image/png" },
    ],
    apple: [
      { url: "/icons/iconLogo.png", type: "image/png", sizes: "180x180" },
    ],
  },
  openGraph: {
    title:
      "Jackson James Wedding Photographer | Best Candid Wedding Photographer in Kochi, Kerala",
    description:
      "Award-winning wedding photographer specializing in candid, documentary, and fine-art wedding photography. Top wedding photographer in Kochi, Kerala, and India.",
    url: "https://www.jacksonjames.in",
    siteName: "Jackson James Photography",
    images: [
      {
        url: "https://www.jacksonjames.in/icons/iconLogo.png",
        width: 1200,
        height: 630,
        alt: "Jackson James Photography",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jackson James Wedding Photographer | Best in Kochi, Kerala & India",
    description:
      "Award-winning candid wedding photographer in Kochi, Kerala. Professional destination wedding photography services.",
    images: ["https://www.jacksonjames.in/icons/iconLogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://www.jacksonjames.in"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="antialiased">
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z5KWXVSV6L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z5KWXVSV6L');
          `}
        </Script>
        <ConditionalNavbar />
        <main>{children}</main>
        <CookieConsent />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
