/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
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
		},
		extend: {},
	},
	darkMode: 'class',
	plugins: [],
}
