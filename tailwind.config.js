/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:  ["class", '[data-theme="night"]'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pcbeach-color': "#52e8f9",
      },
      fontFamily: {
        offroad: ["Offroad-NormalBlack", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
}
