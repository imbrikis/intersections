const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  // purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: "#62B4FF", // LOCATION
      lightGreen: "#A3F78E", // ARTIST
      orange: "#FF985F", // ARTWORK
      orangeWhite: "#ffebe0", // THIS MIGHT NOT BE IN USE
      pink: "#F36AFF", // THEME
      yellow: "#fff128", // AFFILIATION
      lightBlue: "#43F4FF", // MEDIUM
      gray: colors.trueGray,
      black: colors.black,
      white: colors.white,
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      jaldi: ["Jaldi", "sans-serif"],
    },
    fontSize: {
      xxs: ".65rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    screens: {
      xxs: "312px",
      xs: "480px",
      ...defaultTheme.screens,
    },
    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      60: 60,
      70: 70,
    },
    extend: {
      animation: {
        "pulse-background": "pulseBackgroundColor 2s infinite",
      },
      keyframes: {
        pulseBackgroundColor: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0.2",
          },
        },
      },
      transitionProperty: {
        height: "height",
        position: "top, bottom, left, right",
        borderAndPosition:
          "border-radius, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius, top, bottom, left, right",
      },
      gridTemplateRows: {
        // layout: "4rem 5rem auto",
        // layoutLg: "2.5rem 4.5rem auto",
        // mainContent: "auto 10.75rem 3.25rem",
        // mainContentLg: "auto 1.5rem",
        videosPageLg: "2.5rem auto 1.5rem",
        videosPageMobile: "4rem auto 4rem",
      },
      gridTemplateColumns: {
        artwork: "1fr 2fr",
      },
      spacing: {
        n3vw: "-3vw",
        "3vw": "3vw",
        "5vw": "5vw",
        "40vw": "40vw",
        "45vw": "45vw",
        "60vw": "60vw",
        "100vw": "100vw",
      },
    },
    fill: theme => ({
      lightgray: theme("colors.gray.500"),
    }),
    maxWidth: {
      dropdown: "10.5rem",
      dropdownXS: "8rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
}
