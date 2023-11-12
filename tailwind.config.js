/** @type {import('tailwindcss').Config} */
export default {
	mode: 'jit',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			colors: {
				background: {
					three: '#FEFCF2'
				},
				stappatored: {
					three: '#B65139'
				},
				text: {
					three: '#000000'
				},
				darkbrown: {
					three: '#5D4236'
				},
				lightbrown: {
					three: '#764F3E'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/container-queries')]
};
