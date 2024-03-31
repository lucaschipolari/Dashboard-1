/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#ebb970",
        secondary: {
          900:"#FFA750",
          800:"#FF8F38",
          700:"#FF771E",
          600:"#FF5E04",
          500:"#FF4500",
          400:"#FF2C00",
          100:"#BF6812",
        },
        fondo: "#2F2F2F",
      },
      fontFamily: {
        sans: ['"Open Sans"','sans-serif'],
      },
    },
  },
  plugins: [],
}

