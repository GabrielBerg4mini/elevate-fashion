/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        h15: '3.8',
      },
      colors: {
        backColor: '#DBD8D1',
        headerColor: '#373C35',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        bebasNeue: ['var(--font-bebas-neue)'],
      },
    },
  },
  plugins: [],
}
