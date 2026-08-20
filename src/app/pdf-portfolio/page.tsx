import type { Metadata } from "next";
import PdfPortfolioPage from "@/components/pages/PdfPortfolioPage/PdfPortfolioPage";
import { mapSanityPdfPortfolio } from "@/lib/pdf-portfolio/map-sanity";
import { getPdfPortfolioDoc } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "Portfolio PDF",
  description:
    "Jackson James Photography — luxury wedding photography and cinematography portfolio for private client sharing.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export const dynamic = "force-dynamic";

export default async function Page() {
  const doc = await getPdfPortfolioDoc();
  const content = mapSanityPdfPortfolio(doc);
  return <PdfPortfolioPage content={content} />;
}
