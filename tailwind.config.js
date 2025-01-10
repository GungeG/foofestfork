/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "GermaniaOneRegular": ["Germania One"],
        "Gambetta": ["Gambetta"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: "#BB8C00",
        heading: "#FFFFE3",
      },
      height: {
        90: "360px",
      },
      width: {
        81: "324px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
