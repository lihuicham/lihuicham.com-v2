/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
    },
    colors: {
      'transparent': 'transparent',
      'primary-base': '#fbfbfc',
      'secondary-base': '#f8f9fb',
      'tertiary-base': '#eceff4',
      'loading-color': '#e5ebf0',
      'primary-text': '#292B30',
      'secondary-text': '#365D82',
      'tertiary-text': '#a0a9b8',
      'project-text': '#3b4252',
      'gray-text': '#6b6b6b',
      'red': '#A52A2A',
      'nus-orange': '#EF7C00',
      'unc-blue': '#7BAFD4',
      'thestraitstimes-blue': '#142951',
      'switcheolabs-green': '#385E7A',
      'linkedinblue': '#accefa',
      'githubmediumgray': '#c8cacc',
      'gmailred': '#f5c9c4',
      'telegramblue': '#cae7fc',
    },
    container: {
      center: true,
    },
    extend: {
      textUnderlineOffset: {
        6: '6px',
      },
    }
  },
  plugins: [],
}