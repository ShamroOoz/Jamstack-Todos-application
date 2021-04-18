module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend:
     zIndex: {
         '-10': '-10',
        },{
      backgroundColor: ["checked"],
      borderColor: ["checked"],
    },
  },
  plugins: [],
};
