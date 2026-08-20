import type { PdfPortfolioContent } from "./types";

export const DEFAULT_PDF_PORTFOLIO: PdfPortfolioContent = {
  cover: {
    image: "/images/home/hero21.jpg",
    brand: "Jackson James Photography",
    titleLine1: "Crafting",
    titleScript: "Narratives",
    subtitle: "Every frame tells a story, every moment resonates with purpose",
    footerLeft: "Kochi · India · International",
    footerRight: "www.jacksonjames.in",
  },
  about: {
    eyebrow: "Get to know Jackson",
    heading: "Your story,",
    headingScript: "our inspiration",
    portrait: "/images/JacksonImages/jackson1.jpg",
    paragraphs: [
      "Hello, I'm Jackson James. We are a premium wedding photography and cinematography studio specializing in visually stunning, emotionally rich narratives for luxury and destination celebrations.",
      "With a handpicked team of photographers, cinematographers, and editors, we blend documentary storytelling with editorial finesse—delivering refined photographs and 4K cinematic films that honour each couple's unique story.",
      "What began as a passion has become a trusted brand for business leaders, celebrities, and royal families across India and abroad. From our Kochi studio, we travel worldwide—always guided by creativity, reliability, and heartfelt storytelling.",
    ],
    tagline: "Capturing stories that last forever",
  },
  mission: {
    eyebrow: "Our Mission",
    titleBefore: "To Break",
    titleScript: "stereotypes",
    titleAfter: "One Frame at a time",
    paragraphs: [
      "Love transcends all human-made constructs of borders, race, gender, sexuality, and more.",
      "When we hold up our cameras we zoom out of these constructs and focus in on the true emotions, hidden smiles, bright colours, and the true love you share and all that is beautiful.",
    ],
  },
  vision: {
    eyebrow: "Elevating timeless celebrations",
    title: "Our Vision",
    titleScript: "your moments.",
    paragraphs: [
      "Our vision is to scale Jackson James Photography into a leading premium wedding visual storytelling brand across India and selected international markets.",
      "We aim to double our annual project volume while maintaining our signature quality by streamlining operations, investing in skilled talent, and expanding our post-production capabilities.",
      "Through strategic partnerships, technology-driven workflow improvements, and enhanced client experience, we intend to build a brand known not just for creative excellence, but also for reliability, efficiency, and innovation in the wedding industry.",
    ],
  },
  work: {
    eyebrow: "Selected work",
    heading: "The Portfolio",
    headingScript: "where luxury meets artistry",
    featureImage: "/images/ImagesScroll/scroll44.jpg",
    gridImages: [
      "/images/PortfolioSection/malvika&nicholas.jpg",
      "/images/PortfolioSection/tabitha&michael.jpg",
      "/images/PortfolioSection/mariam&adiy.jpg",
      "/images/PortfolioSection/priyantha&julian.jpg",
      "/images/PortfolioSection/natasha&anthony.jpg",
      "/images/PortfolioSection/dharti&Shubham.jpg",
    ],
    stripImages: [
      "/images/ImagesScroll/scroll1.jpg",
      "/images/ImagesScroll/scroll3.jpg",
      "/images/ImagesScroll/scroll6.jpg",
      "/images/ImagesScroll/scroll10.jpeg",
    ],
  },
  lookbook: {
    eyebrow: "Glimpses",
    heading: "Moments",
    headingScript: "we hold dear",
    locationLabel: "India · Destination · International",
    tall: "/images/home/hero8.jpg",
    wideTop: "/images/home/hero2.jpg",
    midLeft: "/images/ImagesScroll/scroll25.jpg",
    midRight: "/images/home/hero6.jpg",
    bottom1: "/images/ImagesScroll/scroll20.jpg",
    bottom2: "/images/home/hero10.jpg",
    bottom3: "/images/AboutUsHeaderScroll/scroll10.jpg",
  },
  services: {
    eyebrow: "How we can serve you",
    heading: "Our Services",
    headingScript: "tailored with care",
    intro:
      "Every celebration is unique. Packages and investment are shared personally after we understand your day, destination, and vision.",
    items: [
      {
        title: "Wedding Photography",
        description:
          "Documentary and editorial imagery capturing genuine emotion, quiet glances, and the atmosphere of your celebration.",
      },
      {
        title: "Wedding Films",
        description:
          "4K cinematic films crafted with narrative care—preserving movement, sound, and the feeling of the day.",
      },
      {
        title: "Destination Weddings",
        description:
          "Luxury coverage across India and internationally—Italy, Dubai, Bangkok, Brisbane, and beyond.",
      },
      {
        title: "Pre-Wedding & Portraits",
        description:
          "Engagement sessions, bridal portraits, and intimate shoots before the wedding weekend unfolds.",
      },
    ],
  },
  praise: {
    eyebrow: "Words from our couples",
    heading: "Client Praise",
    testimonials: [
      {
        couple: "Mariam & Adiy",
        image1: "/images/ClientPraise/Mariam&Adiy1.jpg",
        image2: "/images/ClientPraise/Mariam&Adiy2.jpg",
        testimonial:
          "Working with Jackson was an absolute dream! From the moment we met, we knew we were in the best hands. His ability to capture the raw emotions and candid moments of our wedding day was truly remarkable. Every photograph tells a story, and we find ourselves reliving those precious moments every time we look at them. Jackson's professionalism, creativity, and genuine warmth made us feel comfortable throughout the entire process. We couldn't have asked for a better photographer to document the most important day of our lives.",
      },
      {
        couple: "Tabitha & Michael",
        image1: "/images/ClientPraise/Tabitha&Michael1.jpg",
        image2: "/images/ClientPraise/Tabitha&Michael2.jpg",
        testimonial:
          "Jackson's photography is nothing short of magical. He has this incredible talent for being in the right place at the right time, capturing moments we didn't even realize were happening. Our wedding album is filled with authentic emotions, genuine laughter, and tears of joy. His artistic eye and attention to detail exceeded all our expectations. Jackson made us feel so natural and relaxed in front of the camera, and the results speak for themselves. We are forever grateful for the beautiful memories he has preserved for us.",
      },
    ],
  },
  contact: {
    eyebrow: "Begin your story",
    heading: "Get in Touch",
    addressLines: [
      "Jackson James Photography",
      "475 (1st floor), 11th Cross Road",
      "Panampilly Nagar, Kochi-268036",
    ],
    phone: "+91-7012481354",
    phoneHref: "tel:+917012481354",
    email: "mail@jacksonjames.in",
    website: "www.jacksonjames.in",
    websiteHref: "https://www.jacksonjames.in",
    instagramLabel: "@jacksonjamesphotography",
    instagramHref: "https://instagram.com/jacksonjamesphotography",
  },
};
