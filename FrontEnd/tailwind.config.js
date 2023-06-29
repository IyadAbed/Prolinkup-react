/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}","./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require('preline/plugin'), require('flowbite/plugin'),require("tw-elements/dist/plugin.cjs")],
});

// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     'node_modules/preline/dist/*.js',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui"), require('preline/plugin'), require('flowbite/plugin'), require("@material-tailwind/react/utils/withMT")],



