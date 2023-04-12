/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "main-choco": "#8C5637",
        "light-choco": "#ffebd9",
      },
    },
  },
  plugins: [],
};
