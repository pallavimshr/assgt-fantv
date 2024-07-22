/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#2a2a2b",
          "200": "#1e1e1e",
          "300": "#0c091b",
        },
        lightgray: "#d2d2d2",
        aquamarine: "#adffe4",
        violet: "#fe9bf3",
        mediumslateblue: {
          "100": "#6b61ff",
          "200": "#6c5ff5",
        },
        white: "#fff",
        mediumpurple: "#8e7af0",
        lavender: "#edf0ff",
        yellowgreen: "#c5ff73",
      },
      spacing: {},
      fontFamily: {
        nohemi: "Nohemi",
        "bricolage-grotesque-24pt-condensed":
          "'Bricolage Grotesque 24pt Condensed'",
        inter: "Inter",
      },
      borderRadius: {
        "81xl": "100px",
      },
    },
    fontSize: {
      base: "16px",
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      "67xl": "86px",
      "24xl": "43px",
      "37xl": "56px",
      "26xl": "45px",
      "15xl": "34px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
