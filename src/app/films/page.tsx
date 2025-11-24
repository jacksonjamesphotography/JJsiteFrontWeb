import type { Metadata } from "next";
import FilmsHeader from "@/components/pages/FilmsPage/FilmsHeader";
import AboutFilms from "@/components/pages/FilmsPage/AboutFilms";
import YoutubeVideos from "@/components/pages/FilmsPage/YoutubeVideos";
import FooterSection from "@/components/sections/FooterSection/FooterSection";
import { getFilms } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title:
    "Wedding Films & Videography",
  description:
     "Cinematic wedding videography and films in Kerala, Kochi, India.",
  keywords: [
    "Wedding Videographer Kerala",
    "Wedding Film Maker Kerala",
    "Wedding Videography",
    "Cinematic Wedding Films",
    "Wedding Video Production",
    "Professional Wedding Videographer",
    "Wedding Films Kerala",
    "Destination Wedding Videography",
    "Luxury Wedding Films",
  ],
  openGraph: {
    title: "Wedding Films & Videography | Professional Wedding Videographer",
    description:
      "Professional wedding videography and filmmaking services. Cinematic wedding films capturing your special day in Kerala, India, and internationally.",
    url: "https://www.jacksonjames.in/films",
  },
  alternates: {
    canonical: "https://www.jacksonjames.in/films",
  },
};

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
