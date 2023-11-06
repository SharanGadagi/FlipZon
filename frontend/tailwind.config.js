export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      screens: {
        "1000px": "1000px",
        "500px": "500px",
        "1100px": "1110px",
        "750px": "750px",
        "800px": "800px",
        "920px": "950px",
        "1300px": "1290px",
        "400px": "400px",
        "300px": "275px",
      },
    },
  },
  plugins: [],
};
