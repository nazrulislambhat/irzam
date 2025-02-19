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
        primary: '#072AC8 ',
        secondary: '#CAF0F8',
        orange: '#FF6700',
        dark: '#03045E',
        red: '#FC5130',
        white: '#FBFFFE',
      },
    },
  },
  plugins: [],
};
