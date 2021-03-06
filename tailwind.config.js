module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '120px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: '#1A1A1A',
        secondary: '#ff5c00',
        mygray: '#121212'
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
