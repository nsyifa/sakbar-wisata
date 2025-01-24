/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ,
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "light-beige": "#FFF7E4",
        "sakbar-light": "#FCFBF4",
        "sakbar-brown": "#392413",
        "sakbar-mustard": "#C87E15",
        "sakbar-orange": "#F5A623",
        "sakbar-green": "#4F7942",
      },
      fontFamily: {
        playfair: ["var(--font-playfair-display)", "serif"],
        koho: ["var(--font-koho)", "sans-serif"],
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },

          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },

      animation: {
        slideIn: "slideIn 0.5s ease-out forwards", // Adjust duration and easing as needed
      },
    },
  },
  plugins: [],
};
