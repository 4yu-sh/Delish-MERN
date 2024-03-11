/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light", "dark"],
  },
  theme: {
    extend: {
      colors: {
        green: "#39DBAA",
        red: "#FF6868",
      },
    },
    fontFamily: {
      heading: ["Marcellus"],
      sub: ["Josefin Slab"],
      primary: ["Montserrat"],
      secondary: ["Roboto Mono"],
      quotes: ["Whisper"],
      currency: ["BhuTuka Expanded One"],
    },
  },
  plugins: [require("daisyui")],
};
