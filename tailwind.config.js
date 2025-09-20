/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'govuk-blue': '#1d70b8',
        'govuk-green': '#00703c',
        'govuk-white': '#ffffff',
        'govuk-light-grey': '#f3f2f1',
        'govuk-dark-grey': '#0b0c0c',
      },
       fontFamily: {
        sans: ['"GDS Transport"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}