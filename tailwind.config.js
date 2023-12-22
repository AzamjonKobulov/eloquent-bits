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
      height: {
        400: '25rem',
        600: '37.5rem',
      },
      backgroundImage: {
        contacts: "url('/assets/images/bg-images/location.png')",
        'contacts-mobile':
          "url('/assets/images/bg-images/location-mobile.png')",
      },
      backgroundColor: {
        'product-radial':
          'background-image: radial-gradient(50% 0% at 50% 0%, rgba(0, 57, 43, 0.80) 0%, rgba(1, 1, 1, 0.80) 100%);',
      },
    },
  },
  plugins: [],
};
