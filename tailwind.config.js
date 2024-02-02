/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
    },
    container: {
      center: true,
      padding: "16px",
    },
    // screens: {
    //   sm: "500px",
    //   md: "768px",
    //   lg: "1024px",
    //   xl: "1280px",
    //   "2xl": "1536px",
    // },
    extend: {
      dropShadow: {
        "3xl": "0 0 35px rgba(0, 0, 0, 0.5)",
        "4xl": ["0 35px 35px rgba(0, 0, 0, 0.25)", "0 45px 65px rgba(0, 0, 0, 0.15)"],
      },
      animation: {
        "spin-slow": "spin 2s ease infinite",
      },
    },
  },
  plugins: [],
};
