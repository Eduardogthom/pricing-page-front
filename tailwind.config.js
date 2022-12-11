/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
 module.exports = {
  content: [    
    "./src/pages/**/*.{ts,tsx}",
    "./src/public/**/*.html",
    "./src/components/**/*.{ts,tsx}",
    "./src/components/**/**/*.{ts,tsx}",
    "./src/layout/**/*.{ts,tsx}",
  ],
  plugins: [    
  ],
  theme: {
    colors: {    
      'purple-dark': '#61346b',
      'purple-light': '#bf69c2',      
      'chocolate': '#bf5d21',
      'gold': '#cfac38',          
      'perfume': '#ccacdb',
      'white': '#ffffff',
      'black': '#000',
    },
  },
};