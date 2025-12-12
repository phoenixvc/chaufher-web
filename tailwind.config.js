
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        terracotta: {
          DEFAULT: '#D4735E',
          50: '#FDF3F1',
          100: '#FAE6E2',
          200: '#F5CCC4',
          300: '#EFB2A6',
          400: '#E99989',
          500: '#D4735E', // Base
          600: '#BF553E',
          700: '#9E4633',
          800: '#7D3728',
          900: '#5C291E',
        },
        cream: {
          DEFAULT: '#FAF7F2',
          50: '#FFFFFF',
          100: '#FAF7F2', // Base
          200: '#EDE6DB',
          300: '#E0D4C4',
          400: '#D3C3AD',
          500: '#C6B196',
        },
        sage: {
          DEFAULT: '#A8B5A0',
          50: '#F4F6F3',
          100: '#E9EDE8',
          200: '#D3DBD1',
          300: '#BDC9BA',
          400: '#A8B5A0', // Base
          500: '#8E9E85',
          600: '#73836A',
        },
        warmgray: {
          DEFAULT: '#8B7E74',
          50: '#F5F4F3',
          100: '#EBE9E7',
          200: '#D7D3CF',
          300: '#C3BDB7',
          400: '#AFA79F',
          500: '#9B9288',
          600: '#8B7E74', // Base
          700: '#70655D',
          800: '#554D46',
          900: '#3A3530',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
}
