/** @type {import('tailwindcss').Config} */

module.exports = {

    content: ["./app/**/*.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
    theme: {
      fontFamily:{
'jakartaSans': ['PlusJakartaSans', 'sans-serif']
      },
      extend: {

      },
      colors: {
        'grayColor': '#94A3B8',
        'yellowColor': '#FFCD33',
        'darkBlue': '003314B',
        'neon': '#A2FF86',
        'whiteColor': '#fffff'
      }
    },
    plugins: [
      
    ],
  }
