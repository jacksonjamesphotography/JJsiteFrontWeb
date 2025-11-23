import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Import schema types directly
import story from "../../../studio/schemaTypes/story";
import film from "../../../studio/schemaTypes/film";
import testimonial from "../../../studio/schemaTypes/testimonial";

const schemaTypes = [story, film, testimonial];

export default defineConfig({
  name: "default",
  title: "Jackson Photography Site",
  projectId: "41ocmoqs",
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});

