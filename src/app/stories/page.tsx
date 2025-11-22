import StoriesHeader from "@/components/pages/StoriesPage/StoriesHeader";
import GlimpsText from "@/components/pages/StoriesPage/GlimpsText";
import StoriesPageMain from "@/components/pages/StoriesPage/StoriesPageMain";
import FooterSection from "@/components/sections/FooterSection/FooterSection";
import { getStories } from "@/lib/sanity/queries";

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
