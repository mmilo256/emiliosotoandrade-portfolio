/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#00B3EC",
        primaryDark: "#0294c2",
        primaryLight: "#38cfff",
        secondary: "#EB00FF",
        mainwhite: "#FAFAFA",
        mainblack: "#111",
      },
    },
  },
  plugins: [],
};
