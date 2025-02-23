/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono45': ['Mono45-Headline', 'sans-serif'],
      },
    },
  },
  plugins: [],
}