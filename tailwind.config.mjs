/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'darkblue': '#13151a',
			'primary-dark': '#deb887',
			'pink': '#ff49db',
			'orange': '#ff7849',
			'green': '#13ce66',
			'gray-dark': '#273444',
			'gray': '#8492a6',
			'gray-light': '#d3dce6',
		},
		extend: {},
	},
	darkMode: 'class',
	plugins: [],
}
