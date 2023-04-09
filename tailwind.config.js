/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
      'stem-green': "#0E4042",
      'stem-pink-dark': "#FE9F9B",
      'stem-pink-light': "#FECBC8",
      'stem-blue-dark': "#56B2DB",
      'stem-blue-light': "#CFF1F2",
      'stem-gray': "#F4F4F4",
      'stem-teal': "#49E1E6",
    },
  },
    
  },
  plugins: [],
}