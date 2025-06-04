/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",      // ✅ catches everything in /app including /app/components
    "./pages/**/*.{js,ts,jsx,tsx}",    // optional
    "./components/**/*.{js,ts,jsx,tsx}"// optional
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
