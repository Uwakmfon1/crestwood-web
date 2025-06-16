/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./**/*.html"],
  important: false,
  theme: {
    extend: {
      colors: {},
      fontFamily: {},
    },
  },
  plugins: [],

  corePlugins: {
    preflight: false,
  },
  // Add a prefix to all Tailwind classes to prevent conflicts
  prefix: "tw-",
};
