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
    extend: {
      'height': {
        '128': '32rem',
        '90': '22rem',
      }
    },
    colors: {
      'cherry': '#ff244b',
      'lemon': '#fdbb28',
      'juice': '#fe6100',
    },
    fontFamily: {
      'sans': ['Noto Sans, sans-serif'],
    },
    colors: {
      'cherry': '#ff244b',
      'lemon': '#fdbb28',
      'orangy': '#fd8d0a',
    },
    fontFamily: {
      'sans': ['Noto Sans, sans-serif'],
    }
  },
  plugins: [require('flowbite/plugin')],
}

