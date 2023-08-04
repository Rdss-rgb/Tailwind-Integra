/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'front': "url('/images/front.jpg')",
      },
      height: {
        '128': '38rem',
        '127': '30rem',
      },
      boxShadow:{
        '3xl': '10px 1px 190px 250px ',
      },
      backgroundColor:{
        'lss':'linear-gradient(to right, #434343 0%, black 100%);'
      }
      
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  
  ],
}