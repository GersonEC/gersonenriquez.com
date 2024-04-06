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
			'white': 'white',
			'darkblue': '#13151a',
			'primary-dark': '#deb887',
			'primary-light': '#1637A6',
			'secondary-dark': '#DC33FF',
			'secondary-light': '#deb887',
			'pink': '#ff49db',
			'white': 'white',
			'orange': '#ff7849',
			'green': '#13ce66',
			'black': 'black',
		},
		extend: {},
	},
	darkMode: 'class',
	plugins: [],
}
