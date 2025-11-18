import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jackson James Photography",
  description: "Capturing moments that last a lifetime",
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
    title: "Jackson James Photography",
    description: "Capturing moments that last a lifetime",
    url: "https://jacksonjamesphotography.vercel.app",
    siteName: "Jackson James Photography",
    images: [
      {
        url: "https://jacksonjamesphotography.vercel.app/icons/iconLogo.png",
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
    title: "Jackson James Photography",
    description: "Capturing moments that last a lifetime",
    images: ["https://jacksonjamesphotography.vercel.app/icons/iconLogo.png"],
  },
  metadataBase: new URL("https://jacksonjamesphotography.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
