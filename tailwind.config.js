/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-choco": "#8C5637",
        "light-choco": "#ffebd9",
        "dark-gray": "#767676",
      },
      fontFamily: {
        spoqa: ["Spoqa Han Sans Neo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
