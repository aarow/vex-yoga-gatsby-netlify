module.exports = {
  purge: [],
  theme: {
    fill: theme => ({
      vex: "#a21d25",
      gold: "rgb(227, 208, 168)",
    }),
    extend: {
      colors: {
        vex: "#a21d25",
        gold: "rgb(227, 208, 168)",
      },
    },
    fontFamily: {
      sans:
        '"Source Sans Pro",system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
  },
  variants: {
    fill: ["responsive", "hover", "focus"],
  },
  plugins: [],
}
