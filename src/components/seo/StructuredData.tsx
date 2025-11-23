export default function StructuredData() {
  const photographerSchema = {
    "@context": "https://schema.org",
    "@type": "Photographer",
    "@id": "https://www.jacksonjames.in/#photographer",
    name: "Jackson James Photography",
    alternateName: "Jackson James Wedding Photographer",
    description:
      "Award-winning wedding photographer specializing in candid, documentary, and fine-art wedding photography in Kerala, Kochi, and across India. Professional destination wedding photographer for luxury weddings worldwide.",
    url: "https://www.jacksonjames.in",
    logo: "https://www.jacksonjames.in/icons/iconLogo.png",
    image: "https://www.jacksonjames.in/icons/iconLogo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kochi",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Kochi",
      },
      {
        "@type": "State",
        name: "Kerala",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    serviceType: [
      "Wedding Photography",
      "Candid Wedding Photography",
      "Destination Wedding Photography",
      "Pre-Wedding Photography",
      "Engagement Photography",
      "Bridal Portrait Photography",
      "Wedding Videography",
      "Documentary Wedding Photography",
      "Fine-Art Wedding Photography",
    ],
    keywords:
      "Wedding Photographer Kochi, Wedding Photographer Kerala, Candid Wedding Photographer, Destination Wedding Photographer India, Best Wedding Photographer in Kerala, Professional Wedding Photographer, Luxury Wedding Photography, International Wedding Photographer",
    sameAs: [
      "https://instagram.com/jacksonjamesphotography",
      "https://www.facebook.com/JacksonJPhotography",
      "https://www.youtube.com/channel/UCWZ-4euafoIplCpACJPGHHw",
      "https://in.pinterest.com/jacksonjamesphotography",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.jacksonjames.in/#business",
    name: "Jackson James Photography",
    description:
      "Top wedding photographer in Kochi, Kerala, and India. Specializing in candid, documentary, and luxury destination wedding photography. Serving clients across Kerala, India, and internationally.",
    url: "https://www.jacksonjames.in",
    telephone: "+91-XXXXXXXXXX",
    email: "mail@jacksonjames.in",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kochi",
      addressRegion: "Kerala",
      postalCode: "682000",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "9.9312",
      longitude: "76.2673",
    },
    priceRange: "$$$",
    servesCuisine: "Wedding Photography Services",
    areaServed: [
      "Kochi",
      "Cochin",
      "Kerala",
      "India",
      "Thailand",
      "Goa",
      "Udaipur",
      "Jaipur",
      "Dubai",
      "Maldives",
      "Bali",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Wedding Photography",
    provider: {
      "@id": "https://www.jacksonjames.in/#photographer",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Wedding Photography Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Candid Wedding Photography",
            description:
              "Professional candid wedding photography capturing authentic moments and emotions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Destination Wedding Photography",
            description:
              "Luxury destination wedding photography services for weddings across India and internationally",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pre-Wedding Photography",
            description:
              "Creative pre-wedding and engagement photography sessions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wedding Videography",
            description:
              "Professional wedding filmmaking and videography services",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(photographerSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
