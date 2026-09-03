/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e293b',
        accent: '#0ea5e9',
        'bg-page': '#f8fafc',
        'bg-card': '#ffffff',
        'text-body': '#334155',
        'text-heading': '#0f172a',
      },
    },
  },
  plugins: [],
}
