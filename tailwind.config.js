/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      center: true,

    },
    extend: {
      colors: {
        primary: '#0084FF',
        secondary: '#FFB800',
        secondary_light: '#FF3C3'
      }
    },
  },
  plugins: [],
}