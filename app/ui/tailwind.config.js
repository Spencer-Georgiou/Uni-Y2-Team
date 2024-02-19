/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
  'node_modules/flowbite-react/lib/esm/**/*.js'
],
  theme: {
    extend: {
      'height':{
        '128':'32rem',
        '90':'22rem',
      }
    },
    colors:{
      'cherry':'#ff244b',
      'lemon':'#fdbb28',
      'juice':'#fe6100'
    },
    fontFamily:{
      'sans':['Noto Sans, sans-serif'],
    }
  },
  plugins: [require('flowbite/plugin')],
}



