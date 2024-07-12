/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      transitionDuration: {
        350: '350ms',
        789: '789ms',
      },
      spacing: {
        100: '100px',
      },
    },
  },
  plugins: [],
};
