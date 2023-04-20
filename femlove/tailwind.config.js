/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'f-green': '#76998C',
        'f-red': '#DD9D90',
        'f-red-light': '#FFB5A6',
        'f-pink': '#E9D3CD',
        'f-offwhite': '#FAF7F4',
        'f-brown': '#996A42',
        'f-neutral': '#F0E6DB',
      },
    },
  },
  plugins: [],
}
