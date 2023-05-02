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
      apperror: '#dc2626',
      appblack: '#000000',
      appwhite: '#FFFF'
    },
    screens: {
    "2xl": { max: "1535px" },
    // => @media (max-width: 1535px) { ... }

    xl: { max: "1279px" },
    // => @media (max-width: 1279px) { ... }

    lg: { max: "1023px" },
    // => @media (max-width: 1023px) { ... }

    md: { max: "767px" },
    // => @media (max-width: 767px) { ... }

    sm: { max: "639px" },
    // => @media (max-width: 639px) { ... }

    xs: { max: "479px" },
    // => @media (max-width: 479px) { ... }
},
  },
  plugins: [],
}

