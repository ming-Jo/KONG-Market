/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-choco": "#8C5637",
        "light-choco": "#ffebd9",
        "dark-gray": "#767676",
        "disabled-gray": "#C4C4C4",
        current: "currentColor",
      },
      fontFamily: {
        spoqa: ["Spoqa Han Sans Neo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
