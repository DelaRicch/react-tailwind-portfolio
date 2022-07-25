/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: [ 'Poppins', 'sans-serif']
      },
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.3)',
        'white-rgba': 'rgba(233, 233, 233, 0.3)',
        'secondary': '#1f1f38',
      }
    },
  },
  plugins: [],
}