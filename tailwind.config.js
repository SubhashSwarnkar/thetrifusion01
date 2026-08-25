/** @type {import('tailwindcss').Config} */

const { fontFamily: _fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/parts/**/*.{js,jsx}",
    "./src/views/**/*.{js,jsx}",
    "./src/elements/**/*.{js,jsx}",
  ],
  darkMode: "media",
  theme: {
    fontFamily: {
      sans: ["Poppins", ..._fontFamily.sans],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "4-5xl": "2.625rem",
      "5xl": "3rem",
      "5-5xl": "3.875rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      colors: {
        "light-theme-purple": "#E3D3FD",
        "theme-purple": "#6610f2",
        "dark-theme-purple": "#520dc2",
        "theme-blue": "#152C5B",
        "theme-cyan": "#06b6d4",
        "theme-pink": "#ec4899",
      },
      margin: {
        "-112": "-28rem",
        "-120": "-30rem",
        "-128": "-32rem",
        "-144": "-36rem",
      },
      animation: {
        "bounce-x": "bouncex 1s infinite",
        float: "float 6s ease-in-out infinite",
        wave: "wave 10s linear infinite",
        "marquee-left": "marqueeLeft 40s linear infinite",
        "marquee-right": "marqueeRight 42s linear infinite",
      },
      keyframes: {
        bouncex: {
          "0%, 100%": {
            transform: "translateX(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        wave: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        marqueeLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      spacing: {
        71: "17.75rem",
        95: "23.5rem",
        192: "48rem",
        192.5: "49.5rem",
        193: "51rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
