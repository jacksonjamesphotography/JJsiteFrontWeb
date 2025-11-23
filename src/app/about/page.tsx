import type { Metadata } from "next";
import HeaderScroll from "@/components/pages/AboutUsPage/HeaderScroll";
import AboutJackson from "@/components/pages/AboutUsPage/AboutJackson";
import OurVisionSection from "@/components/pages/AboutUsPage/OurVision";
import OurBeliefs from "@/components/pages/AboutUsPage/OurBeliefs";
import FooterSection from "@/components/sections/FooterSection/FooterSection";
import OurJourney from "@/components/pages/AboutUsPage/OurJourney";
import OurCommunity from "@/components/pages/AboutUsPage/OurCommunity";

export const metadata: Metadata = {
  title: "About Jackson James | Experienced Award-Winning Wedding Photographer in Kerala & India",
  description:
    "Meet Jackson James, an experienced and award-winning wedding photographer based in Kochi, Kerala. With years of professional experience, Jackson specializes in candid, documentary, and fine-art wedding photography. Internationally published photographer serving clients across Kerala, India, and worldwide.",
  keywords: [
    "About Jackson James Photographer",
    "Experienced Wedding Photographer Kerala",
    "Award-Winning Wedding Photographer",
    "Internationally Published Photographer",
    "Wedding Photography Expert India",
    "Professional Photographer with Years of Experience",
    "Premium Wedding Photography Services",
    "Trusted Wedding Photographer India",
    "Jackson James Biography",
    "Kochi Wedding Photographer",
    "Kerala Professional Photographer",
  ],
  openGraph: {
    title: "About Jackson James | Award-Winning Wedding Photographer in Kerala",
    description:
      "Meet Jackson James, an experienced and award-winning wedding photographer specializing in candid, documentary, and fine-art wedding photography in Kerala, India, and internationally.",
    url: "https://www.jacksonjames.in/about",
  },
  alternates: {
    canonical: "https://www.jacksonjames.in/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <HeaderScroll />
      <AboutJackson />
      <OurVisionSection />
      <OurBeliefs />
      <OurJourney />
      <OurCommunity />
      <FooterSection />
    </main>
  );
}
