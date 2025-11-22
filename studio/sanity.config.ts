import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Import schemas
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "Jackson Photography Site",

  projectId: "41ocmoqs",
  dataset: "production",

  // Needed so Studio opens at /studio inside Next.js
  basePath: "/studio",

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
