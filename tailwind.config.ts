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
        night: {
          950: "#04060A",
          900: "#080B14",
          800: "#0F1423",
          700: "#1A2235",
          600: "#27334C",
          500: "#364665",
          400: "#4D6286",
          300: "#6B82A6",
          200: "#8FA3C1",
          100: "#BBC6DA",
        },
        mystic: {
          950: "#190E38",
          900: "#2A185C",
          800: "#3B217D",
          700: "#4B289A",
          600: "#5D31B6",
          500: "#703CD3",
          400: "#8859DC",
          300: "#A179E4",
          200: "#B899F0",
          100: "#D3BEF6",
        },
        gold: {
          600: "#B89728",
          500: "#D4AF37",
          400: "#DFBF5B",
          300: "#E8D085",
          200: "#F1E2AE",
          100: "#FBF5E0",
        },
        accent: {
          950: "#1A1302",
          900: "#332605",
          800: "#5C4509",
          700: "#8A670D",
          600: "#B8860B",
          500: "#D4AF37",
          400: "#DFBF5B",
          300: "#E8D085",
          200: "#F1E2AE",
          100: "#FBF5E0",
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
};
export default config;
