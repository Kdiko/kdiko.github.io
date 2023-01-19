/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brilliant-sea": {
          600: "#0099b8",
          700: "#00849f",
        },
      },
    },
  },
  plugins: [],
};
