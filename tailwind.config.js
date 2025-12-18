/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,tsx,jsx,mdx}",
    "./components/**/*.{js,ts,tsx,jsx,mdx}",
    "./app/**/*.{js,ts,tsx,jsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '2xl': '640px',
      },
    },
  },
  plugins: [],
};
