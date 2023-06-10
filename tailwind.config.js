/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      brightness: {
        '65' : '65%'
      },
    },
  },
  daisyui : {
    themes : ['luxury']
  },
  plugins: [require('daisyui')],
}