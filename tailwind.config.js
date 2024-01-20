/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: "#f4fee7",
          100: "#e7fccb",
          200: "#cffa9c",
          300: "#aef363",
          400: "#8fe833",
          500: "#69c113",
          600: "#54a40c",
          700: "#417d0e",
          800: "#366311",
          900: "#2f5413",
          950: "#152e05",
        },
        brand: {
          50: "#eefffb",
          100: "#c6fff4",
          200: "#8effec",
          300: "#4dfbe1",
          400: "#19e8cf",
          500: "#00bfab",
          600: "#00a497",
          700: "#02837a",
          800: "#086761",
          900: "#0c5550",
          950: "#003433",
        },
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
