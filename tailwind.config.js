/** @type {import('tailwindcss').Config} */
module.exports = {
	"compilerOptions": {
		"paths": {
		  "@/*": ["./src/*"],
		}
	  },
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			height: {
				'10v': '10vh',
				'20v': '20vh',
				'30v': '30vh',
				'40v': '40vh',
				'50v': '50vh',
				'60v': '60vh',
				'70v': '70vh',
				'80v': '80vh',
				'90v': '90vh',
				'100v': '100vh',
			},
			fontFamily: {
				hammersmith: ["Hammersmith", "sans-serif"]
			}	
		},
	},
	plugins: [require('tailwind-scrollbar-hide')],
};
