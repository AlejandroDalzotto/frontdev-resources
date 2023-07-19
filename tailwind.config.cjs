/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Vercetti Regular', 'sans-serif']
		},
		extend: {
			fontFamily: {
				marck: ['Marck Script', 'sans-serif']
			}
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
