/** @type {import('tailwindcss').Config} */

const tailwindConfig = {

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
  darkMode: "class", // Explicitly enable class-based dark mode
  daisyui: {
    themes: ["light", 'dark', 'cupcake'], // Use only the "light" theme
  },
};


export default tailwindConfig;