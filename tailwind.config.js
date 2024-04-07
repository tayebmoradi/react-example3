/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '70px': '70px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

