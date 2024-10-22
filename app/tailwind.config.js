/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
  	extend: {
  		backgroundColor: {
  			'main-orange': 'var(--main-orange)',
  			'sec-blue': 'var(--sec-blue)',
  			'sec-green': 'var(--sec-green)'
  		},
  		textColor: {
  			'main-orange': 'var(--main-orange)',
  			'sec-blue': 'var(--sec-blue)',
  			'sec-green': 'var(--sec-green)'
  		},
  		borderColor: {
  			'main-orange': 'var(--main-orange)',
  			'sec-blue': 'var(--sec-blue)',
  			'sec-green': 'var(--sec-green)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {},
  		animation: {
  			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
  			shine: 'shine var(--duration) infinite linear'
  		},
  		keyframes: {
  			'border-beam': {
  				'100%': {
  					'offset-distance': '100%'
  				}
  			},
  			shine: {
  				'0%': {
  					'background-position': '0% 0%'
  				},
  				'50%': {
  					'background-position': '100% 100%'
  				},
  				to: {
  					'background-position': '0% 0%'
  				}
  			}
  		}
  	}
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
};
