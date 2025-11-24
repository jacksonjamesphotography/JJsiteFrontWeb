import type { Metadata } from "next";
import StoriesHeader from "@/components/pages/StoriesPage/StoriesHeader";
import GlimpsText from "@/components/pages/StoriesPage/GlimpsText";
import StoriesPageMain from "@/components/pages/StoriesPage/StoriesPageMain";
import FooterSection from "@/components/sections/FooterSection/FooterSection";
import { getStories } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "Wedding Stories Gallery",
  description:
    "Explore real wedding photography stories from Kerala, Kochi, and India in our portfolio.",
  keywords: [
    "Wedding Stories Gallery",
    "Wedding Photography Portfolio",
    "Wedding Photography Gallery",
    "Wedding Stories in Kerala",
    "Real Wedding Photography Stories",
    "Kerala Wedding Photography Stories",
    "Kochi Wedding Photography Stories",
    "Wedding Photo Gallery",
  ],
  openGraph: {
    title: "Wedding Stories Gallery | Wedding Photography Portfolio",
    description:
      "Browse our collection of wedding photography stories from real weddings across Kerala, Kochi, and India.",
    url: "https://www.jacksonjames.in/stories",
  },
  alternates: {
    canonical: "https://www.jacksonjames.in/stories",
  },
};

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

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
