import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         maxWidth: {
            "8xl": "90rem",
         },
         // colors: {
         //    primary: "#202c39",
         //    secondary: "#4ade80",
         // },
      },
   },
   plugins: [daisyui],
   daisyui: {
      themes: ["cupcake", "dark"],
   },
};
