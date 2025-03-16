/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs':'320px',
        // 'exact-320': { 'raw': '(min-width: 320px) and (max-width: 320px)' } 
      },
      fontSize:{
        'res-font': ['clamp(1rem, 2vw + 1rem, 2rem)', '1.5rem'],
      }
    },
  },
  plugins: [],
}