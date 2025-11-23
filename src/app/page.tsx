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
import { getTestimonials } from "@/lib/sanity/queries";

async function Home() {
  const testimonials = await getTestimonials();

  return (
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
  );
}

export default Home;
