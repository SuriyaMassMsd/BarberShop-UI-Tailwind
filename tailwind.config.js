/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Logofont:[" Sacramento, cursive;"
        ],
        logo_font:["Cinzel, serif;"
        ],
        btn:["'Montserrat', sans-serif;"],
      }
    },
  },
  plugins: [],
}

