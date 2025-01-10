/** @type {import('tailwindcss').Config} */
export default {
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
        "light-beige": "#FFF7E4",
        "sakbar-brown": "#392413",
      },
      fontFamily: {
        playfair: ["var(--font-playfair-display)", "serif"],
        koho: ["var(--font-koho)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
