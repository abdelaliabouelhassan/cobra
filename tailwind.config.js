/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily:{
        epilogue: ['Epilogue'],
        inter:['Inter']
      },
      colors:{
        primary:'#5C26FF',
        secondry:'#00D5C4',
        tertiary:'#EFF8F8',
        bgray:'#CECECE',
        tgray:'#8F8F8F',
        background:'#FCFCFC'
      },
      screens:{
        '3xl':'2000px'
      }
    },
  },
  plugins: [],
}

