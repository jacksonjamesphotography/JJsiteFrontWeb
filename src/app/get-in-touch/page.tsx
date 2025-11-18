import GetInTouchHeader from "@/components/pages/GetInTouchPage/GetInTouchHeader";
import ContactForm from "@/components/pages/GetInTouchPage/ContactForm";
import TestimonialsSection from "@/components/sections/TestimonialsSection/TestimonialsSection";
import FAQSection from "@/components/pages/GetInTouchPage/FAQSection";
import FooterSection from "@/components/sections/FooterSection/FooterSection";
import DetailsSection from "@/components/pages/GetInTouchPage/DetailsSection";

export default function GetInTouchPage() {
  return (
    <main>
      <GetInTouchHeader />
      <ContactForm />
      <TestimonialsSection />
      <FAQSection />
      <DetailsSection />    
      <FooterSection />
    </main>
  );
}
