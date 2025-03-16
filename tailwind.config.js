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
        'res-font': ['clamp(0.75rem, 1.5vw + 0.5rem, 1.25rem)', '1rem'],
      }
    },
  },
  plugins: [],
}