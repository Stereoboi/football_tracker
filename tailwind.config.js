/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-custom": "linear-gradient(163deg, #00ff75 0%, #3700ff 100%)",
        brush: "url('../../public/brush.png')",
      },
      boxShadow: {
        lg: "0px 0px 30px 1px rgba(0, 255, 117, 0.30)",
      },
      scale: {
        98: "0.99",
      },
      fontFamily: {
        rubick: ["var(--font-rubick)"],
        bangers: ["var(--font-bangers)"],
        permanent_Marker: ["var(--font-permanent_Marker)"],
        righteous: ["var(--font-righteous)"],
      },
    },
    colors: {
      moron: "rgb(139,0,0)",
    },
  },
  plugins: [require("flowbite/plugin")],
});
