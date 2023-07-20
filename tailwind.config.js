/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-100': '#181818',
        'dark-200': '#181818',
        'text-100': '#9CA3AF',
        'text-200': '#220707'
      }
    },
  },
  plugins: [],
}

