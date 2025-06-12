/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BaseColor: "#A0C878",
        GreenColor: "#388E3C",
        GrayColor: "#455A64",
        PurpleColor: "#880E4F",
        BHoverColor: "#DDEB9D",
      },
      fontFamily: {
        cursiveFont: ["Island Moments", "cursive"],
        paraFont: ["Kalam", "cursive"],
      },
    },
  },
  plugins: [],
};
