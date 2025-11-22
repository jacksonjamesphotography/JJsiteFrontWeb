import FilmsHeader from "@/components/pages/FilmsPage/FilmsHeader";
import AboutFilms from "@/components/pages/FilmsPage/AboutFilms";
import YoutubeVideos from "@/components/pages/FilmsPage/YoutubeVideos";
import FooterSection from "@/components/sections/FooterSection/FooterSection";
import { getFilms } from "@/lib/sanity/queries";

async function FilmsPage() {
  const films = await getFilms();

  return (
    <main>
      <FilmsHeader />
      <AboutFilms />
      <YoutubeVideos films={films} />
      <FooterSection />
    </main>
  );
}

export default FilmsPage;
