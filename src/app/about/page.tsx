import HeaderScroll from "@/components/pages/AboutUsPage/HeaderScroll";
import AboutJackson from "@/components/pages/AboutUsPage/AboutJackson";
import OurVisionSection from "@/components/pages/AboutUsPage/OurVision";
import OurBeliefs from "@/components/pages/AboutUsPage/OurBeliefs";
import FooterSection from "@/components/sections/FooterSection/FooterSection";
import OurJourney from "@/components/pages/AboutUsPage/OurJourney";
import OurCommunity from "@/components/pages/AboutUsPage/OurCommunity";

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
