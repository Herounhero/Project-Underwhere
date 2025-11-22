/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Inter Variable'", "'Inter'", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          50: "#f5f6fb",
          100: "#ebeef7",
          200: "#cdd5e9",
          300: "#aebbdc",
          400: "#8297c7",
          500: "#5873b3",
          600: "#425991",
          700: "#32426b",
          800: "#212c45",
          900: "#111726",
        },
      },
      boxShadow: {
        glow: "0 10px 40px rgba(88, 115, 179, 0.25)",
      },
    },
  },
  plugins: [],
}
