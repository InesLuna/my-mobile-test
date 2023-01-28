/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '560px',
      md: '960px',
      lg: '1280px',
      xl: '1600px',
      '2xl': '1920px',
    },
    extend: {
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
};
