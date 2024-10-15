/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        error: "#ff0000",
      },
      fontSize: {
        xxs: "8px",
        xs: "10px",
        sm: "12px",
        sd: "13px",
        smd: "14px",
        md: "16px",
        mlg: "18px",
        lg: "20px",
        xl: "22px",
        xxl: "24px",
        xxxl: "34px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      ui: "1440px",
      xxl: "1536px",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")({ strategy: "class" }),
  ],
};
