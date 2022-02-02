module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    fontFamily: {
      display: ["Source Serif Pro", "Georgia", "serif"],
      body: ["Synonym", "system-ui", "sans-serif"],
    },
    extend: {
      colors: {
        'gold': {
          50: "#fdf2d8",
          100: "#fae4ad",
          200: "#f8d682",
          300: "#f5c856",
          400: "#f3ba2b",
          500: "#e3a60d",
          600: "#ae7f0a",
          700: "#916a08",
          800: "#745507",
          900: "#574005",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
