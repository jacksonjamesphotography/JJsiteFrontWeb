import PrivacyPolicyHeader from "@/components/pages/PrivacyPolicyPage/PrivacyPolicyHeader";
import PrivacyPolicyContent from "@/components/pages/PrivacyPolicyPage/PrivacyPolicyContent";
import FooterSection from "@/components/sections/FooterSection/FooterSection";

export const metadata = {
  title: "Privacy Policy | Jackson James Photography",
  description: "Privacy Policy for Jackson James Photography - Learn how we protect and handle your personal information.",
};

function PrivacyPolicyPage() {
  return (
    <main>
      <PrivacyPolicyHeader />
      <PrivacyPolicyContent />
      <FooterSection />
    </main>
  );
}

export default PrivacyPolicyPage;

