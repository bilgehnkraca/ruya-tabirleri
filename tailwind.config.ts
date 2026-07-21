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
          900: "#2A185C",
          800: "#3B217D",
          700: "#4B289A",
          600: "#5D31B6",
          500: "#703CD3",
          400: "#8859DC",
          300: "#A179E4",
        },
        gold: {
          500: "#D4AF37",
          400: "#DFBF5B",
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
  ],
};
export default config;
