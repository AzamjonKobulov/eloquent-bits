/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      maxWidth: {
        base: '101.875rem',
        nav: '113.875rem',
      },
      screens: {
        xxl: '90rem',
      },
      fontFamily: {
        oxanium: ['Oxanium', 'sans-serif'],
        chakra: ['Chakra Petch', 'sans-serif'],
      },
      fontSize: {
        80: '5rem',
        40: '2.5rem',
        32: '2rem',
      },
      colors: {
        brand: {
          green: {
            100: '#01FCBF',
            200: '#00FCBFCC',
          },
          blue: '#00BFFC',
        },
      },
      spacing: {
        7: '7px',
        15: '0.9375rem',
      },
    },
  },
  plugins: [],
};
