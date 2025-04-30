/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cupcake"]
  }
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: "#3b82f6",
  //         secondary: "#fef3c7",
  //         accent: "#e0e7ff",
  //         neutral: "#1c242b",
  //         "base-100": "#f5f5f4",
  //         info: "#67e8f9",
  //         success: "#10b981",
  //         warning: "#eab308",
  //         error: "#f87171",
  //       },
  //     },
  //   ],
  // },
};
