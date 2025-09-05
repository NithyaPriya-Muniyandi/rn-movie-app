/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
      primary: "#007BC0", 
      secondary: "#DEF5F3",
      third: "#E8f1ff",
      light: {
        100: "#D6C6FF",
        200: "#A8B5DB",
        300: "#9CA4AB",
      },
      dark: {
        100: "#221f3D",
        200: "#0f0d23",
      },
      accent: "#AB8BFF",
      },
    },
  },
  plugins: [],
}
