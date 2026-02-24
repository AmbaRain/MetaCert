/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#121212',
          surface: '#1E1E1E',
          accent: '#7C3AED', // Example purple accent
          border: '#333333',
        },
      },
    },
  },
  plugins: [],
}
