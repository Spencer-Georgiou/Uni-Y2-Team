/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
  'node_modules/flowbite-react/lib/esm/**/*.js'
],
  theme: {
    colors: {
      'amber': '#ea580c',
      'sunflower': '#facc15',
      rose: '#e11d48',
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}



