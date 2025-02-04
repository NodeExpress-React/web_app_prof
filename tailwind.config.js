/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-cad": "url('./assets/bg-cad.png')",
        "bg-log": "url('./assets/bg-log.jpg')",
        "bg-per": "url('./assets/bg-per.jpg')",
      },
    },
  },
  plugins: [],
};
