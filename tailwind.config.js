/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ← point to all source files
  ],
  theme: {
    extend: {
      /* 1️⃣  Keyframes & reusable animation */
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
      },

      /* 2️⃣  Brand colours / fonts (optional) */
      fontFamily: {
        garamond: ['"Cormorant Garamond"', "serif"],
      },
      colors: {
        primary: "#8e44ad", // purple
        accent: "#f59e0b", // amber
      },
    },
  },
  plugins: [
    /** 3️⃣  QUICK utility for pills */
    function ({ addUtilities }) {
      addUtilities({
        ".rounded-button": {
          borderRadius: "9999px",
        },
      });
    },
  ],
};
