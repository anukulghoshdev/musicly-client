/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],



  daisyui: {
    themes: [
      {
        mytheme: { // light theme

          "primary": "#ffc759",

          "secondary": "#ed9ec2",

          "accent": "#d8064c",

          "neutral": "#1B1F23",

          "base-100": "#F7F5FA",

          "info": "#87A9F7",

          "success": "#18C9AB",

          "warning": "#F18B0E",

          "error": "#E85E85",
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
