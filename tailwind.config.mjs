/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      dark: {
        DEFAULT: 'hsl(210deg, 30%, 8%)',
      },
      gray: {
        DEFAULT: '#6b7280',
        light: '#9ca3af',
        dark: '#374151',
      },
      blue: {
        DEFAULT: '#3b82f6',
        light: '#60a5fa',
        dark: '#1e3a8a',
      },
      yellow: {
        DEFAULT: '#facc15',
        light: '#fef08a',
        dark: '#eab308',
      },
      orange: {
        DEFAULT: '#f97316',
        light: '#fdba74',
        dark: '#ea580c',
      },
      pink: {
        DEFAULT: '#ec4899',
        light: '#ff7eb6',
        dark: '#db2777',
      },
      white: 'rgba(255, 255, 255, 0.858)',
      black: '#000000',
    },
    extend: {},
  },
  darkMode: 'class',
  plugins: [],
};
