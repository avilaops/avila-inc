import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0077FF", // Azul espacial
          50: "#E6F1FF",
          100: "#CCE3FF",
          200: "#99C7FF",
          300: "#66ABFF",
          400: "#338FFF",
          500: "#0077FF",
          600: "#0055CC",
          700: "#003399",
          800: "#002266",
          900: "#001133",
        },
        secondary: {
          DEFAULT: "#00E0FF", // Ciano neon
          50: "#E6FCFF",
          100: "#CCF9FF",
          200: "#99F3FF",
          300: "#66EDFF",
          400: "#33E7FF",
          500: "#00E0FF",
          600: "#00B3CC",
          700: "#008699",
          800: "#005966",
          900: "#002C33",
        },
        dark: {
          DEFAULT: "#0B0F17",
          50: "#F0F1F2",
          100: "#E1E4E6",
          200: "#C3C9CD",
          300: "#A5AEB4",
          400: "#87939B",
          500: "#697882",
          600: "#545E68",
          700: "#40464E",
          800: "#2B2E34",
          900: "#15171A",
        },
        light: "#F5F9FF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-space": 
          "linear-gradient(135deg, #0077FF 0%, #00E0FF 50%, #0077FF 100%)",
        "gradient-dark": 
          "linear-gradient(135deg, #0B0F17 0%, #15171A 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          from: { textShadow: "0 0 20px #00E0FF" },
          to: { textShadow: "0 0 30px #00E0FF, 0 0 40px #00E0FF" },
        },
      },
    },
  },
  plugins: [],
};

export default config;