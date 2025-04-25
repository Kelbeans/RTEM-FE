/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'Arial', 'sans-serif'], // Set Poppins as the default sans font
      },
    },
  },
  plugins: [],
};
