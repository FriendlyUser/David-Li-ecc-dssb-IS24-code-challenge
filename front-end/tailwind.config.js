/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        '1/2': '50%',
      },
      maxHeight: {
        '180': '45rem',
        '192': '48rem',
      },
    },
  },
  plugins: [],
}

