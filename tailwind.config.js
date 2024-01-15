/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'icon-shadow': '1px 7px 10px 0px rgba(255, 83, 0, 0.50)'
      }
    },
  },
  plugins: [],
}

