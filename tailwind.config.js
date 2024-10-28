/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "rgba(19, 202, 144)",
        hover: "rgba(19, 202, 144, 0.2)",
      },
      boxShadow: {
        "3xl": "0 10 5px rgba(19, 202, 144, 0.3)",
      },
    },
  },
  plugins: [],
};
