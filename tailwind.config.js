/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Poppins", "serif"],
    },
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
    },
    fontWeight: {
      normal: "300",
      medium: "400",
      "semi-bold": "500",
      bold: "700",
    },
    spacing: {
      px: "1px",
      0: "0",
      1: "0.25rem", // 4px
      2: "0.5rem", // 8px
      3: "0.75rem", // 12px
      4: "1rem", // 16px
      5: "1.25rem", // 20px
      6: "1.5rem", // 24px
      7: "1.75rem", // 28px
      8: "2rem", // 32px
      9: "2.25rem", // 36px
      10: "2.5rem", // 40px
      20: "5rem", // 80px
    },
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#ED5C5C",
        tertiary: "#3F3F3F",
      },
      animation: {
        "spin-once": "rotate 0.3s linear",
        "spin-once-reverse": "rotate-reverse 0.3s linear",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
        "rotate-reverse": {
          "0%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
