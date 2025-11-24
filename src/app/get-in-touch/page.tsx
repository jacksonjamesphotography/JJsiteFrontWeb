import type { Metadata } from "next";
import GetInTouchHeader from "@/components/pages/GetInTouchPage/GetInTouchHeader";
import ContactForm from "@/components/pages/GetInTouchPage/ContactForm";
import TestimonialsSection from "@/components/sections/TestimonialsSection/TestimonialsSection";
import FAQSection from "@/components/pages/GetInTouchPage/FAQSection";
import FooterSection from "@/components/sections/FooterSection/FooterSection";
import DetailsSection from "@/components/pages/GetInTouchPage/DetailsSection";
import { getTestimonials } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "Contact Jackson James Photography",
  description:
    "Contact Jackson James Photography to book your wedding photographer in Kochi, India. Get package quotes now.",
  keywords: [
    "Hire Wedding Photographer Kerala",
    "Book Wedding Photographer Kochi",
    "Wedding Photography Packages Kerala",
    "Destination Wedding Photography Packages India",
    "Contact Wedding Photographer",
    "Wedding Photographer Quote",
    "Book Wedding Photographer",
    "Wedding Photography Booking",
    "Wedding Photographer Kochi",
  ],
  openGraph: {
    title: "Book Wedding Photographer | Contact Jackson James Photography",
    description:
      "Book your wedding photographer today! Contact us for wedding photography packages in Kerala, Kochi, and India.",
    url: "https://www.jacksonjames.in/get-in-touch",
  },
  alternates: {
    canonical: "https://www.jacksonjames.in/get-in-touch",
  },
};

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

async function GetInTouchPage() {
  const testimonials = await getTestimonials();

  return (
    <main>
      <GetInTouchHeader />
      <ContactForm />
      <TestimonialsSection testimonials={testimonials} />
      <FAQSection />
      <DetailsSection />
      <FooterSection />
    </main>
  );
}

export default GetInTouchPage;
