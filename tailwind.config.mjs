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
        white: '#ffffff',
        primary: '#011ef5',
        secondary: '#cbff8c',
        tomato: '#fb4d3d',
        yellow: '#fffd82',
        dark: '#011936',
      },
    },
  },
  plugins: [],
};
