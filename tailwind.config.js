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
      'secondary-text': '#365D82',
      'tertiary-text': '#a0a9b8',
      'red': '#A52A2A',
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
