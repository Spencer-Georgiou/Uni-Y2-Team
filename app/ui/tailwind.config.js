/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {},
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

