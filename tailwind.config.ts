import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "custom-black": "#232323",
        "custom-text": "#3c3c3c",
      },
      screens: {
        xs: "320px",
        "3xl": "1900px",
      },
    },
  },
  plugins: [],
};
export default config;
