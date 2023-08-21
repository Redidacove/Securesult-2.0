/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        robotoSlab: ["Roboto Slab", "serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        archivoBlack: ["Archivo Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
