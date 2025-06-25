/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#E8D1A7',
        verde: '#9D9167',
        marrom: '#84592B',
        vermelho: '#743014',
        marromEscuro: '#442D1C',
      },
    },
  },
  plugins: [],
};
