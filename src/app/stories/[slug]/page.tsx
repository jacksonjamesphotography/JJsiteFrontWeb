import { notFound } from "next/navigation";
import { getStoryBySlug } from "@/lib/sanity/queries";
import StoryGallery from "@/components/pages/StoriesPage/StoryGallery";
import FooterSection from "@/components/sections/FooterSection/FooterSection";

interface StoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = await getStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  return (
    <>
      <StoryGallery story={story} />
      <FooterSection />
    </>
  );
}

export default StoryPage;
