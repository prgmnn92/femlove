/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "f-green": "#76998C",
        "f-red": "#DD9D90",
        "f-red-light": "#F2AC9E",
        "f-pink": "#E9D3CD",
        "f-offwhite": "#FAF7F4",
        "f-neutral": "#F0E6DB",
        "f-main": "#E8998D",
        "f-brown": "#9C8D7F",
      },
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
  ],
};
