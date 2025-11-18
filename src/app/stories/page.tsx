import StoriesHeader from "@/components/pages/StoriesPage/StoriesHeader";
import GlimpsText from "@/components/pages/StoriesPage/GlimpsText";
import StoriesPageMain from "@/components/pages/StoriesPage/StoriesPageMain";
import FooterSection from "@/components/sections/FooterSection/FooterSection";

function StoriesPage() {
  return (
    <main>
      <StoriesHeader />
      <GlimpsText />
      <StoriesPageMain />
      <FooterSection />
    </main>
  );
}

export default StoriesPage;
