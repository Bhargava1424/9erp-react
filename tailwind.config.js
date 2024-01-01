/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
//   daisyui: {
//     themes: [
//       {
//         mytheme: {
        
// "primary": "#ffffff",
//        },
//       },
//     ],
//   },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}