/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    colors: {
      'cherry': '#ff244b',
      'lemon': '#fdbb28',
      'amber': '#f97316'
    },
    extend: {
      'height': {
        '128': '32rem',
        '90': '22rem',
      }
    },
    fontFamily: {
      'sans': ['Noto Sans, sans-serif'],
    }
  },
  plugins: [require('flowbite/plugin')],
}

