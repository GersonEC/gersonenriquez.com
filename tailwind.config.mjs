/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: 'hsl(210deg, 30%, 8%)',
        },
        gray: {
          DEFAULT: 'hsl(218, 11%, 70%)',
          light: 'hsl(218, 11%, 85%)',
          dark: 'hsl(218, 11%, 35%)',
        },
        blue: {
          DEFAULT: 'hsl(217, 91%, 60%)',
          light: 'hsl(217, 91%, 70%)',
          dark: 'hsl(217, 91%, 50%)',
        },
        yellow: {
          DEFAULT: 'hsl(45, 93%, 61%)',
          light: 'hsl(45, 93%, 71%)',
          dark: 'hsl(45, 93%, 51%)',
        },
        orange: {
          DEFAULT: 'hsl(20, 98%, 53%)',
          light: 'hsl(20, 98%, 63%)',
          dark: 'hsl(20, 98%, 43%)',
        },
        pink: {
          DEFAULT: 'hsl(340, 82%, 60%)',
          light: 'hsl(340, 82%, 70%)',
          dark: 'hsl(340, 82%, 50%)',
        },
        white: 'rgba(255, 255, 255, 0.858)',
        black: {
          DEFAULT: 'hsl(0, 0%, 10%)',
          light: 'hsl(0, 0%, 30%)',
          dark: 'hsl(0, 0%, 0%)',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
