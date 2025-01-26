/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./functions/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgGray: "#121212",
        bgLightGray: "#181818",
        bgLighterGray: "#18191a",
        bgWhite: "#ECECEC",
        bgLightWhite: "#DFDFDF",
        bgLighterWhite: "#D5D5D5",
      },
    },
  },
  plugins: [],
};
