/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'primary-base': '#fbfbfc',
      'secondary-base': '#f8f9fb',
      'tertiary-base': '#eceff4',
      'primary-text': '#4c566a',
      'secondary-text': '#5e81ac',
      'tertiary-text': '#a0a9b8',
    }
  },
  plugins: [],
}
