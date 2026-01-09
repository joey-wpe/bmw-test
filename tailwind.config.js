/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      sans: ['"BMW TypeNext"', "sans-serif"],
    },
    fontSize: {
      xs: "0.5rem", // 10px
      sm: "0.6rem", // 12px
      "base-sm": "0.7rem", // 14px
      base: "0.75rem", // 15px
      md: "0.9rem", // 18px
      lg: "1rem", // 20px
      xl: "1.25rem", // 25px
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "2xl-p": "1460px", // used for full-width with 20px side padding
    },
    spacing: {
      0: "0",
      1: "0.25rem", // 5px
      2: "0.5rem", // 10px
      3: "0.75rem", // 15px
      4: "1rem", // 20px
      5: "1.25rem",
      6: "1.5rem", // 30px
      7: "1.75rem",
      8: "2rem", // 40px
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem", // 60px
      13: "3.25rem",
      14: "3.5rem",
      15: "3.75rem",
      16: "4rem", // 80px
      17: "4.25rem",
      18: "4.5rem",
      19: "4.75rem",
      20: "5rem", // 100px
    },
    extend: {
      colors: {
        blue: {
          DEFAULT: "#1C69D3",
          900: "#144C99",
          800: "#1652A7",
        },
        black: "#000000",
        white: "#FFFFFF",
        stone: {
          950: "#111111",
          900: "#1C1C1C",
          850: "#2D2D2D",
          750: "#323232",
          600: "#5C5C5C",
        },
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
    },
  },
  safelist: [
    {
      pattern: /^col-span-(?:[1-9]|1[0-2])$/, // pre-generate col-span-1 thru 12
      variants: ["sm", "md", "lg"],
    },
    {
      pattern: /^col-start-(?:[1-9]|1[0-2])$/, // pre-generate col-start-1 thru 12
      variants: ["sm", "md", "lg"],
    },
    {
      pattern: /^col-end-(?:[1-9]|1[0-2])$/, // pre-generate col-end-1 thru 12
      variants: ["sm", "md", "lg"],
    },
  ],
  plugins: [],
};
