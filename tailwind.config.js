/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/components/*.jsx', './src/components/**/*.jsx'],
  theme: {
    extend: {},
    fontFamily: {
      'roboto': ['Roboto'],
      'prata': ['Prata'],
      'montserrat': ['Montserrat'],
      'bebas': ['Bebas Neue'],
    },
    colors: {
      apporange: '#EF9B49',
      appgray: '#78787A',
      appblack: '#000000',
      appwhite: '#FFFF'
    }
  },
  plugins: [],
}

