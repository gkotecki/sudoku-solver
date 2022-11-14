/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'inner-center': 'inset 0 0px 6px 1px var(--tw-shadow-color)'
      }
    },
  },
  plugins: [],
};
