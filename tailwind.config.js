/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./dist/index.html"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				deca: ["Lexend Deca", "sans-serif"],
			},
			colors: {
				VeryDarkBlue: "hsl(233, 47%, 7%)", // (main background)
				DarkDesaturatedBlue: "hsl(244, 38%, 16%)", // (card background)
				SoftViolet: "hsl(277, 64%, 61%)", // (accent)
				White: "hsl(0, 0%, 100%)", // (main heading, stats)
				SlightlyTransparentWhite: "hsla(0, 0%, 100%, 0.75)", // (main paragraph)
				SlightlyTransparentWhite: "hsla(0, 0%, 100%, 0.6)", // (stat headings)
			},
		},
		plugins: [],
	},
};
