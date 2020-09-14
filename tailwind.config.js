module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        cobalt: {
          100: "#E6EDF6",
          200: "#C1D1E9",
          300: "#9CB5DB",
          400: "#517EC1",
          500: "#0747A6",
          600: "#064095",
          700: "#042B64",
          800: "#03204B",
          900: "#021532"
        }
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")]
};
