/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Roboto', 'sans-serif'],
      },
      colors: {
        myBlue: '#003f66',
        myBlue40: '#9bafc0',
      },
    },
  },
  plugins: [],
}
