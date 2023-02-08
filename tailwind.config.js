/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      sky: "#8382EB",
      blue: "#264373",
      nevy: "#1C3764",
      headerText: "#6765F0",
      whiteText: "#FFFFFF",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    spacing: {
      lg: "10px",
      2: "12px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "48px",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      img: "3.7rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.875rem",
      "5xl": "3.052rem",
    },
  },
  plugins: [require("daisyui")],
};
