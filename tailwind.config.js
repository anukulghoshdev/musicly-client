/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],



  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#5666ce",

          "secondary": "#ba321a",

          "accent": "#1dd3a9",

          "neutral": "#301C31",

          "base-100": "#E6E9EA",

          "info": "#8FD2EA",

          "success": "#46DDA6",

          "warning": "#F2C831",

          "error": "#E86B54",
        },
      },





      {
        darkTheme: {

          "primary": "#67e8f9",

          "secondary": "#c084fc",

          "accent": "#fdba74",

          "neutral": "#1f2937",

          "base-100": "#1c1917",

          "info": "#187AF2",

          "success": "#54D48D",

          "warning": "#facc15",

          "error": "#F76255",
        },
      },


    ],
  },








  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
