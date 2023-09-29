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
      keyframes: {
        wiggle: {
          '0%': {
            opacity: '0.5',
            // transform: 'scale(90%)',
          },
          '100%': {
            opacity: '1',
            // transform: 'scale(100%)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out',
      },
    },
  },
  plugins: [],
}
