/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "main-orange": "var(--main-orange)",
        "sec-blue": "var(--sec-blue)",
        "sec-green": "var(--sec-green)",
      },
    },
  },
  plugins: [],
};
