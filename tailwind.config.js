/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Mona Sans"', "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
