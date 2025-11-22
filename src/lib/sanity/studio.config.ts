import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Import schema types directly
import story from "../../../studio/schemaTypes/story";
import film from "../../../studio/schemaTypes/film";

const schemaTypes = [story, film];

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

