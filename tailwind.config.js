/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        card: '#2a2d3e',
        main: '#212332',
      },
    },
  },
  plugins: [],
}
