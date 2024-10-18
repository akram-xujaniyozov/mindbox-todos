module.exports = {
  content: ["./public/*.html", "./src/**/*.{ts,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        lightred: "#e7dad8",
        lightestgrey: "#f5f5f5",
        lightergrey: "#eeeeee",
        lightgrey: "#d9d9da",
        darkgrey: "#858685",
        dark: "#4d4d4d",
        lightgreen: "#cfe0dd",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
