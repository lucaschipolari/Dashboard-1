/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ebb970",
        secondary: {
          900:"#31363F",
          100:"#222831",
        },
      },
      fontFamily: {
        sans: ['"Open Sans"','sans-serif'],
      },
    },
  },
  plugins: [],
}

