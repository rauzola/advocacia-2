/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: 'var(--font-libre-baskerville)',
        text: 'var(--font-inter)',
      },

      fontSize: {
        '4.5xl': '2.5rem', // 40px
      },

      lineHeight: {
        11: '48px',
      },

      colors: {
        gray: {
          50: '#F2F2F2',
          100: '#E0E0E0',
          500: '#BDBDBD',
          600: '#828282',
          650: '#4F4F4F',
          700: '#333333',
        },

        primary: '#202637',
        secondary: '#D8AE75',
      },

      borderRadius: {
        sm: '4px',
      },

      boxShadow: {
        header: '0 0 24px 0 rgba(0, 0, 0, 0.15)',
        deposition: ' 0px 7px 15px 0px rgba(0, 0, 0, 0.08)',
        contact: '0px 4px 6px 0px rgba(0, 0, 0, 0.06)',
      },

      backgroundImage: {
        footerGradient: 'linear-gradient(180deg, #FFFFFF 0%, #D8AE75 100%)',
      },
    },
  },
  plugins: [],
}
