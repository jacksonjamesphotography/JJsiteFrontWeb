import FilmsHeader from "@/components/pages/FilmsPage/FilmsHeader";
import AboutFilms from "@/components/pages/FilmsPage/AboutFilms";
import YoutubeVideos from "@/components/pages/FilmsPage/YoutubeVideos";
import FooterSection from "@/components/sections/FooterSection/FooterSection";

export default function FilmsPage() {
  return (
    <main>
      <FilmsHeader />
      <AboutFilms />
      <YoutubeVideos />
      <FooterSection />
    </main>
  );
}
