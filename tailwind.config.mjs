/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#D6E6F5',
				'primary-darker': '#0A2034'
			}
		},

	},
	plugins: [],
}
