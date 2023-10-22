/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "index.html",
    "about.html",
    "form.html"
  ],
  theme: {
    fontFamily: {
      san: ["Poppins", "sans-serif"],
    },
    extend: {
      fontFamily: {
        heading: ["Lora", "serif"],
        code: ["Cutive Mono", "monospace"],
      },
      colors: {
        "primary-600": "#0050E6",
        "primary-500": "#377dff",
        "primary-400": "#6C9FFF",
      },
      spacing : {
        "dd" : "50px"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
