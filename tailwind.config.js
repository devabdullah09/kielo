/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal': '#1a1a1a',
        'off-white': '#fafafa',
        'heather': '#6A6F9E',
        'mineral-purple': '#4B3A6A',
        'text-purple': '#6A5A8E',
        'nordic-night': '#39294D',
      },
      fontFamily: {
        sans: ['Source Sans 3', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      lineHeight: {
        'relaxed': '1.75',
        'loose': '2',
      },
    },
  },
  plugins: [],
}
