/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Montserrat', 'sans-serif'],
        home_cursive:[ 'Indie Flower', 'cursive'],
        quantro:['Quattrocento Sans', 'sans-serif']
      },
      colors:{
        grayWhite:'#dcdbdc',
        releaseBlack:'#080202',
        releaseBlack200:'#121212',
        shadowBlack:'#1a1a1a',
        darkYellow:'#f5c518',
        normalBlue:'#4d84cc',
        buttonBg:'#2c2c2c',
        homeBg:'#1e2125'
      }
    },
  },
  plugins: [],
}

