export type PdfService = {
  title: string;
  description: string;
};

export type PdfTestimonial = {
  couple: string;
  image1: string;
  image2: string;
  testimonial: string;
};

export type PdfPortfolioContent = {
  cover: {
    image: string;
    brand: string;
    titleLine1: string;
    titleScript: string;
    subtitle: string;
    footerLeft: string;
    footerRight: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    headingScript: string;
    portrait: string;
    paragraphs: string[];
    tagline: string;
  };
  mission: {
    eyebrow: string;
    titleBefore: string;
    titleScript: string;
    titleAfter: string;
    paragraphs: string[];
  };
  vision: {
    eyebrow: string;
    title: string;
    titleScript: string;
    paragraphs: string[];
  };
  work: {
    eyebrow: string;
    heading: string;
    headingScript: string;
    featureImage: string;
    gridImages: string[];
    stripImages: string[];
  };
  lookbook: {
    eyebrow: string;
    heading: string;
    headingScript: string;
    locationLabel: string;
    tall: string;
    wideTop: string;
    midLeft: string;
    midRight: string;
    bottom1: string;
    bottom2: string;
    bottom3: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    headingScript: string;
    intro: string;
    items: PdfService[];
  };
  praise: {
    eyebrow: string;
    heading: string;
    testimonials: PdfTestimonial[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    addressLines: string[];
    phone: string;
    phoneHref: string;
    email: string;
    website: string;
    websiteHref: string;
    instagramLabel: string;
    instagramHref: string;
  };
};
