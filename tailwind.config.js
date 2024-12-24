/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    'node_modules/preline/dist/*.js',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'selector',
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('preline/plugin')],
};
