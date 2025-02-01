/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        screens: {
            'sm': '567px',
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
        Animation: {
          "loop-scroll": "loop-scroll 10s linear infinite",

        },
        keyframes:{
          "loop-scroll": {
            from: {transform: "translateX(0)" },
            to: {transform: "translateX(-100%)" },
          },
        },

      },
    },
    plugins: [],
  };