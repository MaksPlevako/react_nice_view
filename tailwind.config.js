/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
		fontFamily: {
			sans: ['Roboto Condensed', 'sans-serif'],
			serif: ['Nunito', 'serif'],
		},
	},
	plugins: [],
}
