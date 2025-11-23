import type { Metadata } from "next";
import StoriesHeader from "@/components/pages/StoriesPage/StoriesHeader";
import GlimpsText from "@/components/pages/StoriesPage/GlimpsText";
import StoriesPageMain from "@/components/pages/StoriesPage/StoriesPageMain";
import FooterSection from "@/components/sections/FooterSection/FooterSection";
import { getStories } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title:
    "Wedding Stories Gallery | Candid Wedding Photography Portfolio - Kochi, Kerala",
  description:
    "Browse our stunning collection of candid wedding photography stories from real weddings across Kerala, Kochi, and India. View our portfolio of documentary-style wedding photography capturing authentic moments and emotions.",
  keywords: [
    "Wedding Photography Portfolio",
    "Candid Wedding Photography Gallery",
    "Wedding Stories Kerala",
    "Wedding Photography Examples",
    "Real Wedding Photography",
    "Documentary Wedding Photography Portfolio",
    "Kerala Wedding Photography Gallery",
    "Kochi Wedding Photography Stories",
  ],
  openGraph: {
    title: "Wedding Stories Gallery | Candid Wedding Photography Portfolio",
    description:
      "Browse our stunning collection of candid wedding photography stories from real weddings across Kerala, Kochi, and India.",
    url: "https://www.jacksonjames.in/stories",
  },
  alternates: {
    canonical: "https://www.jacksonjames.in/stories",
  },
};

async function StoriesPage() {
  const stories = await getStories();

  return (
    <main>
      <StoriesHeader />
      <GlimpsText />
      <StoriesPageMain stories={stories} />
      <FooterSection />
    </main>
  );
}

export default StoriesPage;
