/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato"],
        display: ['"Playfair Display"'],
        tall: ['"IBM Plex Sans"'],
        "tall-2": ["Overpass"],
      },
      colors: {
        "s-blue": "#173957",
        "s-orange": "#F06D47",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],

  daisyui: {
    themes: false,
  },
};
