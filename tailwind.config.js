/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'gris-muy-profundo': '#1A2226',
        'gris-profundo': '#1E282C',
        'gris-poco-profundo': '#222B2F',
        'gris-menos-profundo': '#1E282C',
        'morado-uc': '#6802C1',
        'gris-calmado': '#F1F1F1',
        'gris-fondo': '#D9D9D9',
      },
      fontFamily: {
        sans: ['"Neue Plak"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
