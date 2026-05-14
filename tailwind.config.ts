import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8EF",
        ink: "#263238",
        leaf: "#6FAF7A",
        moss: "#3F7B43",
        sun: "#F6B51E",
        coral: "#F26F5B",
        mint: "#EDF7EC"
      },
      boxShadow: {
        soft: "0_10px_30px_rgba(0,0,0,0.06)"
      }
    }
  },
  plugins: []
};

export default config;
