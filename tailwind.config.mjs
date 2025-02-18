/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--accent-color)',
        background: 'var(--background-color)',
        text: 'var(--text-color)',
        button: 'var(--button-color)',
      },
      fontSize: {
        h1: '36px', // For main titles or important headings
        h2: '28px', // For subheadings and section titles
        h3: '22px', // For smaller headings or section subtitles
        body: '16px', // Ideal for paragraphs and general content
        button: '14px', // Easy-to-read size for buttons or call-to-actions
      },
    },
  },
  plugins: [],
};
