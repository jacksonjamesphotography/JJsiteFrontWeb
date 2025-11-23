"use client";

export default function PrivacyPolicyContent() {
  return (
    <section
      className="relative py-16 md:py-24"
      style={{ backgroundColor: "#faf9f6" }}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Last Updated */}
        <div className="mb-12 text-center">
          <p
            className="text-xs md:text-sm uppercase tracking-widest text-gray-600"
            style={{
              fontFamily: "var(--font-family-body)",
              letterSpacing: "0.2em",
            }}
          >
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <p
            className="text-sm md:text-base text-gray-700 leading-relaxed"
            style={{ fontFamily: "var(--font-family-body)" }}
          >
            At Jackson James Photography, we are committed to protecting your
            privacy and ensuring the security of your personal information. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website, use our services, or
            interact with us.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {/* Information We Collect */}
          <div>
            <h2
              className="text-2xl md:text-3xl font-normal mb-6"
              style={{
                fontFamily: "var(--font-family-display)",
                color: "#2E2E2E",
              }}
            >
              1. Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3
                  className="text-lg md:text-xl font-medium mb-3"
                  style={{
                    fontFamily: "var(--font-family-display)",
                    color: "#2E2E2E",
                  }}
                >
                  Personal Information
                </h3>
                <p
                  className="text-sm md:text-base text-gray-700 leading-relaxed"
                  style={{ fontFamily: "var(--font-family-body)" }}
                >
                  We may collect personal information that you voluntarily
                  provide to us when you:
                </p>
                <ul
                  className="list-disc list-inside mt-3 space-y-2 text-sm md:text-base text-gray-700 ml-4"
                  style={{ fontFamily: "var(--font-family-body)" }}
                >
                  <li>Contact us through our website or email</li>
                  <li>Fill out inquiry forms or request quotes</li>
                  <li>Book our photography or videography services</li>
                  <li>Subscribe to our newsletter or updates</li>
                  <li>Interact with us on social media platforms</li>
                </ul>
                <p
                  className="text-sm md:text-base text-gray-700 leading-relaxed mt-4"
                  style={{ fontFamily: "var(--font-family-body)" }}
                >
                  This information may include your name, email address, phone
                  number, wedding date, event location, and any other details
                  you choose to share with us.
                </p>
              </div>

              <div className="mt-6">
                <h3
                  className="text-lg md:text-xl font-medium mb-3"
                  style={{
                    fontFamily: "var(--font-family-display)",
                    color: "#2E2E2E",
                  }}
                >
                  Automatically Collected Information
                </h3>
                <p
                  className="text-sm md:text-base text-gray-700 leading-relaxed"
                  style={{ fontFamily: "var(--font-family-body)" }}
                >
                  When you visit our website, we automatically collect certain
                  information about your device and browsing behavior,
                  including:
                </p>
                <ul
                  className="list-disc list-inside mt-3 space-y-2 text-sm md:text-base text-gray-700 ml-4"
                  style={{ fontFamily: "var(--font-family-body)" }}
                >
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Device information (type, operating system)</li>
                </ul>
              </div>

              <div className="mt-6">
                <h3
                  className="text-lg md:text-xl font-medium mb-3"
                  style={{
                    fontFamily: "var(--font-family-display)",
                    color: "#2E2E2E",
                  }}
                >
                  Photography and Media
                </h3>
                <p
                  className="text-sm md:text-base text-gray-700 leading-relaxed"
                  style={{ fontFamily: "var(--font-family-body)" }}
                >
                  As part of our services, we capture photographs and videos of
                  your events. These images may include you, your guests, and
                  your property. We retain these materials as part of our
                  portfolio and may use them for marketing purposes with your
                  consent, as outlined in our service agreement.
                </p>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h2
              className="text-2xl md:text-3xl font-normal mb-6"
              style={{
                fontFamily: "var(--font-family-display)",
                color: "#2E2E2E",
              }}
            >
              2. How We Use Your Information
            </h2>
            <p
              className="text-sm md:text-base text-gray-700 leading-relaxed mb-4"
              style={{ fontFamily: "var(--font-family-body)" }}
            >
              We use the information we collect for the following purposes:
            </p>
            <ul
              className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-700 ml-4"
              style={{ fontFamily: "var(--font-family-body)" }}
            >
              <li>
                To provide, maintain, and improve our photography and
                videography services
              </li>
              <li>To communicate with you about your inquiries and bookings</li>
              <li>
                To process payments and manage your account or service contracts
              </li>
              <li>
                To send you updates, newsletters, and promotional materials
                (with your consent)
              </li>
              <li>
                To respond to your comments, questions, and customer service
                requests
              </li>
              <li>
                To analyze website usage and trends to enhance user experience
              </li>
              <li>
                To comply with legal obligations and protect our rights and
                property
              </li>
              <li>
                To showcase our work through portfolios, social media, and
                marketing materials (with your consent)
              </li>
            </ul>
          </div>

          {/* Information Sharing */}
          <div>
            <h2
              className="text-2xl md:text-3xl font-normal mb-6"
              style={{
                fontFamily: "var(--font-family-display)",
                color: "#2E2E2E",
              }}
            >
              3. Information Sharing and Disclosure
            </h2>
            <p
              className="text-sm md:text-base text-gray-700 leading-relaxed mb-4"
              style={{ fontFamily: "var(--font-family-body)" }}
            >
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information only in the following
              circumstances:
            </p>
            <ul
              className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-700 ml-4"
              style={{ fontFamily: "var(--font-family-body)" }}
            >
              <li>
                <strong>Service Providers:</strong> We may share information
                with trusted third-party service providers who assist us in
                operating our website, conducting business, or serving our
                clients (e.g., payment processors, email service providers,
                cloud storage services).
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose information
                if required by law, court order, or government regulation, or to
                protect our rights, property, or safety, or that of others.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger,
                acquisition, or sale of assets, your information may be
                transferred as part of that transaction.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may share your
                information with your explicit consent for specific purposes.
              </li>
            </ul>
          </div>

          {/* Data Security */}
          <div>
            <h2
              className="text-2xl md:text-3xl font-normal mb-6"
              style={{
                fontFamily: "var(--font-family-display)",
                color: "#2E2E2E",
              }}
            >
              4. Data Security
            </h2>
            <p
              className="text-sm md:text-base text-gray-700 leading-relaxed"
              style={{ fontFamily: "var(--font-family-body)" }}
            >
              We implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. However, no method
              of transmission over the Internet or electronic storage is 100%
              secure. While we strive to use commercially acceptable means to
              protect your information, we cannot guarantee absolute security.
            </p>
          </div>

          {/* Your Rights */}
          <div>
            <h2
              className="text-2xl md:text-3xl font-normal mb-6"
              style={{
                fontFamily: "var(--font-family-display)",
                color: "#2E2E2E",
              }}
            >
              5. Your Rights and Choices
            </h2>
            <p
              className="text-sm md:text-base text-gray-700 leading-relaxed mb-4"
              style={{ fontFamily: "var(--font-family-body)" }}
            >
              You have the following rights regarding your personal information:
            </p>
            <ul
              className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-700 ml-4"
              style={{ fontFamily: "var(--font-family-body)" }}
            >
              <li>
                <strong>Access:</strong> You can request access to the personal
                information we hold about you.
              </li>
              <li>
                <strong>Correction:</strong> You can request correction of any
                inaccurate or incomplete information.
              </li>
              <li>
                <strong>Deletion:</strong> You can request deletion of your
                personal information, subject to legal and contractual
                obligations.
              </li>
              <li>
                <strong>Opt-Out:</strong> You can opt-out of receiving marketing
                communications from us by following the unsubscribe instructions
                in our emails or contacting us directly.
              </li>
              <li>
                <strong>Portability:</strong> You can request a copy of your
                data in a structured, commonly used format.
              </li>
            </ul>
            <p
              className="text-sm md:text-base text-gray-700 leading-relaxed mt-4"
              style={{ fontFamily: "var(--font-family-body)" }}
            >
              To exercise these rights, please contact us using the information
              provided in the "Contact Us" section below.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2
              className="text-2xl md:text-3xl font-normal mb-6"
              style={{
                fontFamily: "var(--font-family-display)",
                color: "#2E2E2E",
              }}
            >
              6. Cookies and Tracking Technologies
            </h2>
            <p
              className="text-sm md:text-base text-gray-700 leading-relaxed"
              style={{ fontFamily: "var(--font-family-body)" }}
            >
              We use cookies and similar tracking technologies to enhance your
              browsing experience, analyze website traffic, and understand user
              preferences. You can control cookie preferences through your
              browser settings. However, disabling cookies may limit some
              functionality of our website.
            </p>
          </div>

          {/* Third-Party Links */}
          <div>
            <h2
              className="text-2xl md:text-3xl font-normal mb-6"
              style={{
                fontFamily: "var(--font-family-display)",
                color: "#2E2E2E",
              }}
            >
              7. Third-Party Links
            </h2>
            <p
              className="text-sm md:text-base text-gray-700 leading-relaxed"
              style={{ fontFamily: "var(--font-family-body)" }}
            >
              Our website may contain links to third-party websites, including
              social media platforms. We are not responsible for the privacy
              practices or content of these external sites. We encourage you to
              review the privacy policies of any third-party sites you visit.
            </p>
          </div>

          {/* Children's Privacy */}
          <div>
            <h2
              className="text-2xl md:text-3xl font-normal mb-6"
              style={{
                fontFamily: "var(--font-family-display)",
                color: "#2E2E2E",
              }}
            >
              8. Children's Privacy
            </h2>
            <p
              className="text-sm md:text-base text-gray-700 leading-relaxed"
              style={{ fontFamily: "var(--font-family-body)" }}
            >
              Our services are not directed to individuals under the age of 18.
              We do not knowingly collect personal information from children. If
              you believe we have inadvertently collected information from a
              child, please contact us immediately, and we will take steps to
              delete such information.
            </p>
          </div>

          {/* Changes to Privacy Policy */}
          <div>
            <h2
              className="text-2xl md:text-3xl font-normal mb-6"
              style={{
                fontFamily: "var(--font-family-display)",
                color: "#2E2E2E",
              }}
            >
              9. Changes to This Privacy Policy
            </h2>
            <p
              className="text-sm md:text-base text-gray-700 leading-relaxed"
              style={{ fontFamily: "var(--font-family-body)" }}
            >
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for legal, operational, or regulatory
              reasons. We will notify you of any material changes by posting the
              updated policy on this page and updating the "Last Updated" date.
              Your continued use of our services after such changes constitutes
              your acceptance of the updated Privacy Policy.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h2
              className="text-2xl md:text-3xl font-normal mb-6"
              style={{
                fontFamily: "var(--font-family-display)",
                color: "#2E2E2E",
              }}
            >
              10. Contact Us
            </h2>
            <p
              className="text-sm md:text-base text-gray-700 leading-relaxed mb-4"
              style={{ fontFamily: "var(--font-family-body)" }}
            >
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us:
            </p>
            <div
              className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200"
              style={{ fontFamily: "var(--font-family-body)" }}
            >
              <p className="text-sm md:text-base text-gray-700 mb-2">
                <strong>Jackson James Photography</strong>
              </p>
              <p className="text-sm md:text-base text-gray-700 mb-2">
                Email:{" "}
                <a
                  href="mailto:mail@jacksonjames.in"
                  className="text-gray-700 hover:text-gray-900 underline"
                >
                  mail@jacksonjames.in
                </a>
              </p>
              <p className="text-sm md:text-base text-gray-700">
                Website:{" "}
                <a
                  href="/get-in-touch"
                  className="text-gray-700 hover:text-gray-900 underline"
                >
                  Visit our Contact Page
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-16 pt-8 border-t border-gray-300">
          <p
            className="text-sm md:text-base text-gray-600 italic text-center leading-relaxed"
            style={{ fontFamily: "var(--font-family-body)" }}
          >
            Thank you for trusting Jackson James Photography with your special
            moments. We are committed to protecting your privacy and ensuring
            your information is handled with care and respect.
          </p>
        </div>
      </div>
    </section>
  );
}
