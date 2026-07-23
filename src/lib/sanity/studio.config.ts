import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Import schema types directly
import story from "../../../studio/schemaTypes/story";
import film from "../../../studio/schemaTypes/film";
import testimonial from "../../../studio/schemaTypes/testimonial";
import home from "../../../studio/schemaTypes/home";

const schemaTypes = [home, story, film, testimonial];

export default defineConfig({
  name: "default",
  title: "Jackson Photography Site",
  projectId: "41ocmoqs",
  dataset: "production",
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Home")
              .id("home")
              .child(
                S.document().schemaType("home").documentId("home").title("Home")
              ),
            S.documentTypeListItem("story").title("Stories"),
            S.listItem()
              .title("Films")
              .schemaType("film")
              .child(
                S.documentTypeList("film")
                  .title("Films")
                  .defaultOrdering([{ field: "title", direction: "asc" }])
              ),
            S.documentTypeListItem("testimonial").title("Testimonials"),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
