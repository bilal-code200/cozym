module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		extend: {
			fontFamily: {
				Montserrat: ['Montserrat', 'sans-serif'],
			},
			keyframes: {
				parallax: {
					'0%': { transform: 'scale(1.1) translateY(0px)' },
					'100%': { transform: 'scale(1.1) translateY(-20px)' },
				},
				fadeSlide: {
					'0%': { opacity: 0, transform: 'translateY(20px)' },
					'100%': { opacity: 1, transform: 'translateY(0px)' },
				},
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-50%)' },
				},
			},
			animation: {
				parallax: 'parallax 10s linear infinite alternate',
				fadeSlide: 'fadeSlide 1.2s ease-out',
				marquee: 'marquee 15s linear infinite',
			},
		},
	},
	plugins: [],
};
