/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: '#1f2937', // Dark gray for main text/headings
        secondary: '#4b5563', // Lighter gray for subtext
        accent: '#8b5cf6', // Purple accent
        'accent-green': '#10b981', // Green accent
        'accent-blue': '#3b82f6', // Blue accent
        'soft-bg': '#f9fafb',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,0))',
      }
    },
  },
  plugins: [],
}
