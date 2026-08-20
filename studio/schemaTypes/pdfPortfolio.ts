import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "pdfPortfolio",
  title: "PDF Portfolio",
  type: "document",
  fields: [
    defineField({
      name: "cover",
      title: "Cover page",
      type: "object",
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({
          name: "image",
          title: "Cover image",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({ name: "brand", title: "Brand line", type: "string" }),
        defineField({ name: "titleLine1", title: "Title line", type: "string" }),
        defineField({ name: "titleScript", title: "Script word", type: "string" }),
        defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 2 }),
        defineField({ name: "footerLeft", title: "Footer left", type: "string" }),
        defineField({ name: "footerRight", title: "Footer right", type: "string" }),
      ],
    }),
    defineField({
      name: "about",
      title: "About",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({
          name: "headingScript",
          title: "Heading script",
          type: "string",
        }),
        defineField({
          name: "portrait",
          title: "Portrait photo",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "paragraphs",
          title: "Paragraphs",
          type: "array",
          of: [defineArrayMember({ type: "text", rows: 3 })],
        }),
        defineField({ name: "tagline", title: "Tagline", type: "string" }),
      ],
    }),
    defineField({
      name: "mission",
      title: "Mission",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({
          name: "titleBefore",
          title: "Title before script",
          type: "string",
        }),
        defineField({ name: "titleScript", title: "Script word", type: "string" }),
        defineField({ name: "titleAfter", title: "Title after", type: "string" }),
        defineField({
          name: "paragraphs",
          title: "Paragraphs",
          type: "array",
          of: [defineArrayMember({ type: "text", rows: 3 })],
        }),
      ],
    }),
    defineField({
      name: "vision",
      title: "Vision",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "titleScript", title: "Script word", type: "string" }),
        defineField({
          name: "paragraphs",
          title: "Paragraphs",
          type: "array",
          of: [defineArrayMember({ type: "text", rows: 3 })],
        }),
      ],
    }),
    defineField({
      name: "work",
      title: "Selected work",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({
          name: "headingScript",
          title: "Heading script",
          type: "string",
        }),
        defineField({
          name: "featureImage",
          title: "Feature image",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "gridImages",
          title: "Grid images (6)",
          type: "array",
          of: [
            defineArrayMember({
              type: "image",
              options: { hotspot: true },
            }),
          ],
          options: { layout: "grid" },
          validation: (Rule) => Rule.max(6),
        }),
        defineField({
          name: "stripImages",
          title: "Strip images (4)",
          type: "array",
          of: [
            defineArrayMember({
              type: "image",
              options: { hotspot: true },
            }),
          ],
          options: { layout: "grid" },
          validation: (Rule) => Rule.max(4),
        }),
      ],
    }),
    defineField({
      name: "lookbook",
      title: "Lookbook",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({
          name: "headingScript",
          title: "Heading script",
          type: "string",
        }),
        defineField({
          name: "locationLabel",
          title: "Location label",
          type: "string",
        }),
        defineField({
          name: "tall",
          title: "Tall image",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "wideTop",
          title: "Wide top image",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "midLeft",
          title: "Mid left image",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "midRight",
          title: "Mid right image",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "bottom1",
          title: "Bottom image 1",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "bottom2",
          title: "Bottom image 2",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "bottom3",
          title: "Bottom image 3",
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({
          name: "headingScript",
          title: "Heading script",
          type: "string",
        }),
        defineField({ name: "intro", title: "Intro", type: "text", rows: 3 }),
        defineField({
          name: "items",
          title: "Service items",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({
                  name: "description",
                  title: "Description",
                  type: "text",
                  rows: 3,
                }),
              ],
              preview: {
                select: { title: "title" },
              },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "praise",
      title: "Client praise",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({
          name: "testimonials",
          title: "Testimonials (2)",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "couple", title: "Couple", type: "string" }),
                defineField({
                  name: "image1",
                  title: "Image 1",
                  type: "image",
                  options: { hotspot: true },
                }),
                defineField({
                  name: "image2",
                  title: "Image 2",
                  type: "image",
                  options: { hotspot: true },
                }),
                defineField({
                  name: "testimonial",
                  title: "Quote",
                  type: "text",
                  rows: 5,
                }),
              ],
              preview: {
                select: { title: "couple", media: "image1" },
              },
            }),
          ],
          validation: (Rule) => Rule.max(2),
        }),
      ],
    }),
    defineField({
      name: "contact",
      title: "Contact",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({
          name: "addressLines",
          title: "Address lines",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
        defineField({ name: "phone", title: "Phone", type: "string" }),
        defineField({ name: "phoneHref", title: "Phone link", type: "string" }),
        defineField({ name: "email", title: "Email", type: "string" }),
        defineField({ name: "website", title: "Website label", type: "string" }),
        defineField({
          name: "websiteHref",
          title: "Website URL",
          type: "url",
        }),
        defineField({
          name: "instagramLabel",
          title: "Instagram label",
          type: "string",
        }),
        defineField({
          name: "instagramHref",
          title: "Instagram URL",
          type: "url",
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "PDF Portfolio",
        subtitle: "Printable client portfolio",
      };
    },
  },
});
