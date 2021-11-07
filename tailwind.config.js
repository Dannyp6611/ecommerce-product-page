// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "pale-orange": "hsl(25, 100%, 94%)",
        orange: "hsl(26, 100%, 55%)",
        "very-dark-blue": "hsl(220, 13%, 13%)",
        "dark-grayish-blue": "hsl(219, 9%, 45%)",
        "grayish-blue": "hsl(220, 14%, 75%)",
        "light-grayish-blue": "hsl(223, 64%, 98%)",
        "lightbox-bg": "hsl(0, 0%, 0%)",
      },
    },
    container: {
      center: true,
      screens: {
        sm: "1222px",
        md: "1222px",
        lg: "1222px",
        xl: "1222px",
      },
    },
    fontFamily: {
      Kumbh: ["Kumbh Sans", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
