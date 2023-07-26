/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-choco': '#8C5637',
        'light-choco': '#ffebd9',
        'light-gray': '#f2f2f2',
        'disabled-gray': '#C4C4C4',
        'dark-gray': '#767676',
        current: 'currentColor',
      },
      fontFamily: {
        spoqa: ['Spoqa Han Sans Neo', 'sans-serif'],
      },
      boxShadow: {
        small: '0 0 20px -12px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
