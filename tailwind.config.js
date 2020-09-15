module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sf-purple": "#0543FF",
        "sf-purple-2": "#5433FF",
        "sf-blue": "#20BDFF",
        "sf-teal": "#A5FECB",
        "sf-dark": "#040D59",
        "sf-dark-blue": "#346BB9",
        "sf-footer-blue": "#0644FF",
      },
      fontFamily: {
        logo: ["Unica One"],
      },
    },
  },
  variants: {},
};
