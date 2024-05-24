/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary-lightest': '#E2EEF9',
				'primary-light': '#D6E6F5',
				'primary': '#0A2034',
				'primary-dark': '#0C1721'
			},
			aspectRatio: {
				'3/4': '3 / 4',
			  },
		},

	},
	plugins: [],
}
