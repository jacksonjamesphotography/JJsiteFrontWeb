import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection/HeroSection";
import ExperienceSection from "@/components/sections/ExperienceSection/ExperienceSection";
import OurMission from "@/components/sections/OurMissionSection/OurMission";
import CTASection from "@/components/sections/CTASection/CTASection";
import FeaturedSection from "@/components/sections/FeaturedSection/FeaturedSection";
import PortfolioSection from "@/components/sections/PortfolioSection/PortfolioSection";
import ExploreFilmsSection from "@/components/sections/ExploreFilmsSection/ExploreFilmsSection";
import AboutJackson from "@/components/sections/AboutSection/AboutJackson";
import ScrollImageSection from "@/components/sections/ScrollImageSection/ScrollImageSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection/TestimonialsSection";
import DedicationSection from "@/components/sections/DedicationSection/DedicationSection";
import FooterSection from "@/components/sections/FooterSection/FooterSection";
import StructuredData from "@/components/seo/StructuredData";
import { getTestimonials } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "Jackson James Wedding Photography",
  description:
    "Jackson James is an award-winning wedding photographer based in Kochi, Kerala. Specializing in capturing authentic moments and emotions for weddings across India and internationally. Professional destination wedding photography services for luxury weddings. Book your wedding photographer today.",
  keywords: [
    "Jackson James Photographer",
    "Jackson James Wedding Photographer",
    "Wedding Photographer Kochi",
    "Wedding Photographer Kerala",
    "Wedding Photographer India",
    "Top Wedding Photographer in Kerala",
    "Best Wedding Photographer in Kochi",
    "Destination Wedding Photographer India",
    "International Wedding Photographer",
    "Professional Wedding Photographer Kerala",
    "Candid Wedding Photographer Kochi",
    "Luxury Wedding Photographer India",
    "Premium Wedding Photographer",
    "Best Kochi Wedding Photographer",
    "Pre-Wedding Photography Kochi",
    "Best Wedding Photography Kerala",
    "Destination Wedding Photographer Kerala",
    "Indian Wedding Photographer",
    "South India Wedding Photographer",
    "Professional Photographer India",
    "Cinematic Wedding Photography",
    "Storytelling Wedding Photographer",
    "Pre-Wedding Photographer Kerala",
    "Engagement Photographer India",
    "Wedding Film Maker Kerala",
    "Wedding Videographer Kerala",
    "Hire Wedding Photographer Kerala",
    "Book Wedding Photographer Kochi",
    "Wedding Photography Packages Kerala",
    "Destination Wedding Photography Packages India",
    "Experienced Wedding Photographer Kerala",
    "Award-Winning Wedding Photographer",
    "Internationally Published Photographer",
  ],
  openGraph: {
    title:
      "Jackson James Wedding Photographer | Best Wedding Photographer in Kochi, Kerala",
    description:
      "Award-winning wedding photographer in Kochi, Kerala, and India. Capturing authentic moments and emotions for weddings across India and internationally. Professional destination wedding photography services.",
    url: "https://www.jacksonjames.in",
    siteName: "Jackson James Photography",
    images: [
      {
        url: "https://www.jacksonjames.in/icons/iconLogo.png",
        width: 1200,
        height: 630,
        alt: "Jackson James Wedding Photographer - Best Wedding Photographer in Kochi, Kerala",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jackson James Wedding Photographer | Best in Kochi, Kerala & India",
    description:
      "Award-winning wedding photographer in Kochi, Kerala. Professional destination wedding photography services across India and internationally.",
    images: ["https://www.jacksonjames.in/icons/iconLogo.png"],
  },
  alternates: {
    canonical: "https://www.jacksonjames.in",
  },
};

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

async function Home() {
  const testimonials = await getTestimonials();

  return (
    <>
      <StructuredData />
      <div>
        <HeroSection />
        <ExperienceSection />
        <ExploreFilmsSection />
        <OurMission />
        <CTASection />
        <FeaturedSection />
        <PortfolioSection />
        <AboutJackson />
        <ScrollImageSection />
        <TestimonialsSection testimonials={testimonials} />
        <DedicationSection />
        <FooterSection />
      </div>
    </>
  );
}

export default Home;
