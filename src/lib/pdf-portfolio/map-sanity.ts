import { DEFAULT_PDF_PORTFOLIO } from "./default-content";
import type { PdfPortfolioContent } from "./types";
import { getSanityImageUrl } from "@/lib/sanity.image";

function img(source: unknown, fallback: string, width = 1600): string {
  if (!source) return fallback;
  try {
    const url = getSanityImageUrl(source as never, width, 90);
    return url || fallback;
  } catch {
    return fallback;
  }
}

function text(value: unknown, fallback: string): string {
  return typeof value === "string" && value.trim() ? value : fallback;
}

function paragraphs(value: unknown, fallback: string[]): string[] {
  if (!Array.isArray(value) || value.length === 0) return fallback;
  const cleaned = value
    .map((item) => (typeof item === "string" ? item.trim() : ""))
    .filter(Boolean);
  return cleaned.length ? cleaned : fallback;
}

function imageList(
  value: unknown,
  fallback: string[],
  width = 1200
): string[] {
  if (!Array.isArray(value) || value.length === 0) return fallback;
  return fallback.map((fb, i) => img(value[i], fb, width));
}

export function mapSanityPdfPortfolio(doc: any): PdfPortfolioContent {
  const d = DEFAULT_PDF_PORTFOLIO;
  if (!doc) return d;

  return {
    cover: {
      image: img(doc.cover?.image, d.cover.image, 2000),
      brand: text(doc.cover?.brand, d.cover.brand),
      titleLine1: text(doc.cover?.titleLine1, d.cover.titleLine1),
      titleScript: text(doc.cover?.titleScript, d.cover.titleScript),
      subtitle: text(doc.cover?.subtitle, d.cover.subtitle),
      footerLeft: text(doc.cover?.footerLeft, d.cover.footerLeft),
      footerRight: text(doc.cover?.footerRight, d.cover.footerRight),
    },
    about: {
      eyebrow: text(doc.about?.eyebrow, d.about.eyebrow),
      heading: text(doc.about?.heading, d.about.heading),
      headingScript: text(doc.about?.headingScript, d.about.headingScript),
      portrait: img(doc.about?.portrait, d.about.portrait, 800),
      paragraphs: paragraphs(doc.about?.paragraphs, d.about.paragraphs),
      tagline: text(doc.about?.tagline, d.about.tagline),
    },
    mission: {
      eyebrow: text(doc.mission?.eyebrow, d.mission.eyebrow),
      titleBefore: text(doc.mission?.titleBefore, d.mission.titleBefore),
      titleScript: text(doc.mission?.titleScript, d.mission.titleScript),
      titleAfter: text(doc.mission?.titleAfter, d.mission.titleAfter),
      paragraphs: paragraphs(doc.mission?.paragraphs, d.mission.paragraphs),
    },
    vision: {
      eyebrow: text(doc.vision?.eyebrow, d.vision.eyebrow),
      title: text(doc.vision?.title, d.vision.title),
      titleScript: text(doc.vision?.titleScript, d.vision.titleScript),
      paragraphs: paragraphs(doc.vision?.paragraphs, d.vision.paragraphs),
    },
    work: {
      eyebrow: text(doc.work?.eyebrow, d.work.eyebrow),
      heading: text(doc.work?.heading, d.work.heading),
      headingScript: text(doc.work?.headingScript, d.work.headingScript),
      featureImage: img(doc.work?.featureImage, d.work.featureImage, 1800),
      gridImages: imageList(doc.work?.gridImages, d.work.gridImages, 1000),
      stripImages: imageList(doc.work?.stripImages, d.work.stripImages, 800),
    },
    lookbook: {
      eyebrow: text(doc.lookbook?.eyebrow, d.lookbook.eyebrow),
      heading: text(doc.lookbook?.heading, d.lookbook.heading),
      headingScript: text(doc.lookbook?.headingScript, d.lookbook.headingScript),
      locationLabel: text(doc.lookbook?.locationLabel, d.lookbook.locationLabel),
      tall: img(doc.lookbook?.tall, d.lookbook.tall, 1200),
      wideTop: img(doc.lookbook?.wideTop, d.lookbook.wideTop, 1400),
      midLeft: img(doc.lookbook?.midLeft, d.lookbook.midLeft, 1000),
      midRight: img(doc.lookbook?.midRight, d.lookbook.midRight, 900),
      bottom1: img(doc.lookbook?.bottom1, d.lookbook.bottom1, 1000),
      bottom2: img(doc.lookbook?.bottom2, d.lookbook.bottom2, 1000),
      bottom3: img(doc.lookbook?.bottom3, d.lookbook.bottom3, 1000),
    },
    services: {
      eyebrow: text(doc.services?.eyebrow, d.services.eyebrow),
      heading: text(doc.services?.heading, d.services.heading),
      headingScript: text(doc.services?.headingScript, d.services.headingScript),
      intro: text(doc.services?.intro, d.services.intro),
      items:
        Array.isArray(doc.services?.items) && doc.services.items.length
          ? doc.services.items.map((item: any, i: number) => ({
              title: text(item?.title, d.services.items[i]?.title || ""),
              description: text(
                item?.description,
                d.services.items[i]?.description || ""
              ),
            }))
          : d.services.items,
    },
    praise: {
      eyebrow: text(doc.praise?.eyebrow, d.praise.eyebrow),
      heading: text(doc.praise?.heading, d.praise.heading),
      testimonials:
        Array.isArray(doc.praise?.testimonials) && doc.praise.testimonials.length
          ? doc.praise.testimonials.map((item: any, i: number) => ({
              couple: text(item?.couple, d.praise.testimonials[i]?.couple || ""),
              image1: img(
                item?.image1,
                d.praise.testimonials[i]?.image1 || "",
                800
              ),
              image2: img(
                item?.image2,
                d.praise.testimonials[i]?.image2 || "",
                800
              ),
              testimonial: text(
                item?.testimonial,
                d.praise.testimonials[i]?.testimonial || ""
              ),
            }))
          : d.praise.testimonials,
    },
    contact: {
      eyebrow: text(doc.contact?.eyebrow, d.contact.eyebrow),
      heading: text(doc.contact?.heading, d.contact.heading),
      addressLines: paragraphs(doc.contact?.addressLines, d.contact.addressLines),
      phone: text(doc.contact?.phone, d.contact.phone),
      phoneHref: text(doc.contact?.phoneHref, d.contact.phoneHref),
      email: text(doc.contact?.email, d.contact.email),
      website: text(doc.contact?.website, d.contact.website),
      websiteHref: text(doc.contact?.websiteHref, d.contact.websiteHref),
      instagramLabel: text(doc.contact?.instagramLabel, d.contact.instagramLabel),
      instagramHref: text(doc.contact?.instagramHref, d.contact.instagramHref),
    },
  };
}
