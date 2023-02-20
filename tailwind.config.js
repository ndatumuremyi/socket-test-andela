/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#BC0063',
        primary_bold:'#4F0606',
        black_light:'#A4A6B3',
        gray_light:'#C5C7CD'
      },

    },
  },
  plugins: [],
}
