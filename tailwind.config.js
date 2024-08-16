/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.html', 
    './src/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      }
    },
  },
  plugins: [],
}

