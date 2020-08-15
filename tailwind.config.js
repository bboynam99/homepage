module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      linearGradientColors: {
        brand: ["rgb(0,176,255)", "rgb(146,254,186)", "rgb(0,176,255)"],
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss-gradients")],
};
