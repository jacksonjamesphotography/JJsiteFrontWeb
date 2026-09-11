import type { ReactNode } from "react";
import Image from "next/image";
import PrintButton from "./PrintButton";
import type { PdfPortfolioContent } from "@/lib/pdf-portfolio/types";

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p
      className="text-[9px] uppercase tracking-[0.22em] font-extralight text-gray-600 mb-2"
      style={{ fontFamily: "var(--font-family-body)" }}
    >
      {children}
    </p>
  );
}

function DisplayHeading({
  line,
  script,
}: {
  line: string;
  script?: string;
}) {
  return (
    <h2
      className="text-[22px] leading-snug uppercase"
      style={{ fontFamily: "var(--font-family-display)", color: "#2E2E2E" }}
    >
      {line}
      {script ? (
        <>
          {" "}
          <span
            className="text-[28px] normal-case lowercase"
            style={{ fontFamily: "var(--font-family-script)" }}
          >
            {script}
          </span>
        </>
      ) : null}
    </h2>
  );
}

export default function PdfPortfolioPage({
  content,
}: {
  content: PdfPortfolioContent;
}) {
  const { cover, about, mission, vision, work, lookbook, services, praise, contact } =
    content;

  return (
    <div className="pdf-studio text-[#2E2E2E]">
      <PrintButton />

      <section className="pdf-sheet pdf-cover">
        <div className="relative flex-1 min-h-0">
          <Image
            src={cover.image}
            alt={`${cover.brand} — luxury wedding`}
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="210mm"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center text-white">
            <Image
              src="/images/logo/logo.png"
              alt="Jackson James"
              width={96}
              height={96}
              className="object-contain mb-5 opacity-95"
              unoptimized
              priority
            />
            <p
              className="text-[10px] uppercase tracking-[0.35em] font-extralight mb-4"
              style={{ fontFamily: "var(--font-family-body)" }}
            >
              {cover.brand}
            </p>
            <h1
              className="text-[36px] font-normal uppercase leading-tight"
              style={{ fontFamily: "var(--font-family-heading)" }}
            >
              {cover.titleLine1}
              <br />
              Meaningful{" "}
              <span
                className="text-[42px] normal-case lowercase"
                style={{ fontFamily: "var(--font-family-script)" }}
              >
                {cover.titleScript}
              </span>
            </h1>
            <p
              className="mt-4 max-w-[320px] text-[10px] font-thin uppercase tracking-wider text-white/80"
              style={{ fontFamily: "var(--font-family-body)" }}
            >
              {cover.subtitle}
            </p>
          </div>
        </div>
        <div
          className="flex items-center justify-between gap-4 px-8 py-3.5 shrink-0"
          style={{ backgroundColor: "#ede6e0" }}
        >
          <p
            className="text-[9px] uppercase tracking-[0.2em] font-light text-gray-700"
            style={{ fontFamily: "var(--font-family-body)" }}
          >
            {cover.footerLeft}
          </p>
          <p
            className="text-[9px] uppercase tracking-[0.2em] font-light text-gray-700"
            style={{ fontFamily: "var(--font-family-body)" }}
          >
            {cover.footerRight}
          </p>
        </div>
      </section>

      <section className="pdf-sheet pdf-about">
        <div
          className="flex-[1.15] min-h-0 px-[16mm] pt-[11mm] pb-[7mm] flex flex-col justify-center"
          style={{ backgroundColor: "#f9f6f5" }}
        >
          <div className="text-center mb-4">
            <SectionEyebrow>{about.eyebrow}</SectionEyebrow>
            <DisplayHeading line={about.heading} script={about.headingScript} />
          </div>

          <div className="flex gap-5 items-center">
            <div className="relative w-[140px] h-[175px] shrink-0 overflow-hidden shadow-sm">
              <Image
                src={about.portrait}
                alt="Jackson James"
                fill
                className="object-cover object-[center_18%]"
                sizes="140px"
                quality={90}
                priority
              />
            </div>

            <div
              className="flex-1 space-y-2.5 text-[11px] leading-[1.6] font-light text-justify"
              style={{ fontFamily: "var(--font-family-body)" }}
            >
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
              <p className="text-[9px] uppercase tracking-[0.18em] text-gray-600 text-left">
                {about.tagline}
              </p>
            </div>
          </div>
        </div>

        <div
          className="flex items-center gap-3 px-[28mm] shrink-0"
          style={{ backgroundColor: "#f9f6f5" }}
          aria-hidden
        >
          <div className="flex-1 h-px" style={{ backgroundColor: "#b7ad9d" }} />
          <span className="text-[8px] leading-none" style={{ color: "#b7ad9d" }}>
            ◆
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: "#b7ad9d" }} />
        </div>

        <div
          className="flex-1 min-h-0 px-[16mm] py-[7mm] flex flex-col items-center justify-center text-center"
          style={{ backgroundColor: "#f9f6f5" }}
        >
          <SectionEyebrow>{mission.eyebrow}</SectionEyebrow>
          <h2
            className="text-[18px] font-normal leading-snug uppercase mb-2.5"
            style={{
              fontFamily: "var(--font-family-display)",
              color: "#2E2E2E",
            }}
          >
            {mission.titleBefore}
            <br />
            <span
              className="text-[26px] normal-case lowercase"
              style={{ fontFamily: "var(--font-family-script)" }}
            >
              {mission.titleScript}
            </span>{" "}
            {mission.titleAfter.split(" ").slice(0, 1).join(" ")}
            <br />
            {mission.titleAfter.split(" ").slice(1).join(" ")}
          </h2>
          <Image
            src="/images/logo/logoblack.png?v=2"
            alt="Jackson Logo"
            width={56}
            height={56}
            className="object-contain mb-2.5"
            unoptimized
          />
          <div
            className="space-y-2.5 max-w-[460px] text-[11px] font-light leading-[1.6] text-gray-700"
            style={{ fontFamily: "var(--font-family-body)" }}
          >
            {mission.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>

        <div
          className="flex-1 min-h-0 px-[16mm] py-[7mm] flex flex-col items-center justify-center text-center"
          style={{ backgroundColor: "#ede6e0" }}
        >
          <SectionEyebrow>{vision.eyebrow}</SectionEyebrow>
          <h2
            className="text-[18px] font-normal leading-snug uppercase mb-2.5"
            style={{
              fontFamily: "var(--font-family-display)",
              color: "#2E2E2E",
            }}
          >
            {vision.title}
            <br />
            <span
              className="text-[26px] normal-case lowercase"
              style={{ fontFamily: "var(--font-family-script)" }}
            >
              {vision.titleScript}
            </span>
          </h2>
          <div
            className="space-y-2.5 text-[11px] font-light leading-[1.6] text-gray-800 text-justify"
            style={{ fontFamily: "var(--font-family-body)" }}
          >
            {vision.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="pdf-sheet pdf-work" style={{ backgroundColor: "#FAF9F6" }}>
        <div className="pdf-sheet-inner">
          <div className="shrink-0 mb-4">
            <SectionEyebrow>{work.eyebrow}</SectionEyebrow>
            <DisplayHeading line={work.heading} script={work.headingScript} />
          </div>

          <div className="relative flex-[1.05] min-h-0 mb-2 overflow-hidden">
            <Image
              src={work.featureImage}
              alt="Featured wedding photograph"
              fill
              className="object-cover"
              sizes="182mm"
              quality={90}
              priority
            />
          </div>

          <div className="grid grid-cols-3 gap-2 flex-[1.15] min-h-0 mb-2">
            {work.gridImages.map((src, index) => (
              <div key={`${src}-${index}`} className="relative min-h-0 overflow-hidden">
                <Image
                  src={src}
                  alt={`Portfolio ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="60mm"
                  quality={90}
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-2 flex-[0.7] min-h-0">
            {work.stripImages.map((src, index) => (
              <div key={`${src}-${index}`} className="relative min-h-0 overflow-hidden">
                <Image
                  src={src}
                  alt={`Story moment ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="45mm"
                  quality={90}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pdf-sheet pdf-lookbook" style={{ backgroundColor: "#ede6e0" }}>
        <div className="h-full flex flex-col px-[12mm] py-[10mm] min-h-0">
          <div className="shrink-0 mb-3 flex items-end justify-between gap-4">
            <div>
              <SectionEyebrow>{lookbook.eyebrow}</SectionEyebrow>
              <DisplayHeading
                line={lookbook.heading}
                script={lookbook.headingScript}
              />
            </div>
            <p
              className="text-[8px] uppercase tracking-[0.2em] text-gray-500 pb-1"
              style={{ fontFamily: "var(--font-family-body)" }}
            >
              {lookbook.locationLabel}
            </p>
          </div>

          <div className="flex-1 min-h-0 grid grid-cols-12 grid-rows-6 gap-2">
            {(
              [
                ["tall", "col-span-5 row-span-4", "Editorial wedding portrait"],
                ["wideTop", "col-span-7 row-span-2", "Luxury wedding moment"],
                ["midLeft", "col-span-4 row-span-2", "Candid wedding detail"],
                ["midRight", "col-span-3 row-span-2", "Couple portrait"],
                ["bottom1", "col-span-4 row-span-2", "Wedding celebration"],
                ["bottom2", "col-span-4 row-span-2", "Destination wedding"],
                ["bottom3", "col-span-4 row-span-2", "Intimate wedding story"],
              ] as const
            ).map(([key, cls, alt]) => (
              <div key={key} className={`relative ${cls} overflow-hidden`}>
                <Image
                  src={lookbook[key]}
                  alt={alt}
                  fill
                  className="object-cover object-center"
                  sizes="90mm"
                  quality={90}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pdf-sheet pdf-close">
        <div
          className="flex-[1.05] min-h-0 px-[16mm] pt-[11mm] pb-[7mm] flex flex-col justify-center"
          style={{ backgroundColor: "#ede6e0" }}
        >
          <div className="text-center mb-4">
            <SectionEyebrow>{services.eyebrow}</SectionEyebrow>
            <DisplayHeading
              line={services.heading}
              script={services.headingScript}
            />
            <p
              className="mt-2 max-w-[420px] mx-auto text-[10px] font-light leading-relaxed text-gray-700"
              style={{ fontFamily: "var(--font-family-body)" }}
            >
              {services.intro}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-3.5">
            {services.items.map((service, index) => (
              <div
                key={service.title}
                className="border-t border-gray-400/50 pt-2.5"
              >
                <p
                  className="text-[8px] tracking-[0.2em] text-gray-500 mb-1"
                  style={{ fontFamily: "var(--font-family-body)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3
                  className="text-[13px] uppercase tracking-wide mb-1"
                  style={{
                    fontFamily: "var(--font-family-display)",
                    color: "#2E2E2E",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-[10px] font-light leading-relaxed text-gray-700"
                  style={{ fontFamily: "var(--font-family-body)" }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex-[1.15] min-h-0 px-[16mm] py-[7mm] flex flex-col justify-center"
          style={{ backgroundColor: "#f9f6f5" }}
        >
          <div className="text-center mb-4">
            <SectionEyebrow>{praise.eyebrow}</SectionEyebrow>
            <DisplayHeading line={praise.heading} />
          </div>

          <div className="grid grid-cols-2 gap-6">
            {praise.testimonials.map((item) => (
              <div key={item.couple} className="text-center">
                <div className="flex justify-center gap-2.5 mb-2.5">
                  <div className="relative w-[114px] h-[154px] overflow-hidden shadow-sm">
                    <Image
                      src={item.image1}
                      alt={`${item.couple} 1`}
                      fill
                      className="object-cover object-center"
                      sizes="114px"
                      quality={90}
                    />
                  </div>
                  <div className="relative w-[114px] h-[154px] overflow-hidden shadow-sm">
                    <Image
                      src={item.image2}
                      alt={`${item.couple} 2`}
                      fill
                      className="object-cover object-center"
                      sizes="114px"
                      quality={90}
                    />
                  </div>
                </div>
                <p
                  className="text-[12px] mb-1.5"
                  style={{
                    fontFamily: "var(--font-family-heading)",
                    color: "#181716",
                  }}
                >
                  {item.couple}
                </p>
                <p
                  className="text-[9.5px] font-light leading-relaxed text-justify text-gray-700"
                  style={{ fontFamily: "var(--font-family-body)" }}
                >
                  &ldquo;
                  {item.testimonial.length > 210
                    ? `${item.testimonial.slice(0, 210).trim()}…`
                    : item.testimonial}
                  &rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="shrink-0 px-[16mm] py-[8mm] text-center"
          style={{ backgroundColor: "#6B5542" }}
        >
          <p
            className="text-[9px] uppercase tracking-[0.22em] font-extralight mb-2"
            style={{ fontFamily: "var(--font-family-body)", color: "#f5e6d3" }}
          >
            {contact.eyebrow}
          </p>
          <h2
            className="text-[20px] font-normal uppercase mb-2.5"
            style={{
              fontFamily: "var(--font-family-display)",
              color: "#FFFFFF",
            }}
          >
            {contact.heading}
          </h2>
          <div
            className="space-y-1 text-[10px] font-light leading-relaxed"
            style={{ fontFamily: "var(--font-family-body)", color: "#f5e6d3" }}
          >
            <p>{contact.addressLines.join(" · ")}</p>
            <p>
              <a href={contact.phoneHref} className="text-[#f5e6d3]">
                {contact.phone}
              </a>
              {" · "}
              <a href={`mailto:${contact.email}`} className="text-[#f5e6d3]">
                {contact.email}
              </a>
              {" · "}
              <a href={contact.instagramHref} className="text-[#f5e6d3]">
                {contact.instagramLabel}
              </a>
            </p>
            <p
              className="pt-1 text-[12px] uppercase tracking-[0.22em]"
              style={{
                fontFamily: "var(--font-family-display)",
                color: "#FFFFFF",
              }}
            >
              <a href={contact.websiteHref} className="text-[#FFFFFF]">
                {contact.website}
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
