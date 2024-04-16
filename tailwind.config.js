/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B3C8CF",
        secondary: "#F1EEDC",
        third: "#E5DDC5",
        buttonColor: "#E8751A",
      },
    },
  },
  plugins: [],
};
