import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FAF9F6", // use bg-background
        "text-primary": "#2E2E2E", // use text-text-primary
        "text-secondary": "#6B7280", // use text-text-secondary
        accent: {
          DEFAULT: "#7DC4E4", // use bg-accent / text-accent
          hover: "#374151", // use hover:bg-accent-hover / hover:text-accent-hover
          light: "#E0F2FF",
        },
        border: "#D1D5DB", // use border-border
      },
      fontFamily: {
        heading: ["Cormorant Garamond", "serif"],
        body: ["Poppins", "sans-serif"],
        script: ["Monsieur La Doulaise", "cursive"],
        display: ["Bodoni Moda", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
