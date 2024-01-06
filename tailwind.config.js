const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				neutral: {
					50: '#fafafa',
					100: '#f5f5f5',
					200: '#e5e5e5',
					300: '#d4d4d4',
					400: '#a3a3a3'
				},
				magnum: {
					50: '#fff9ed',
					100: '#fef2d6',
					200: '#fce0ac',
					300: '#f9c978',
					400: '#f7b155',
					500: '#f38d1c',
					600: '#e47312',
					700: '#bd5711',
					800: '#964516',
					900: '#793a15',
					950: '#411c09'
				}
			},
			fontFamily: {
				sans: ['"Noto Sans KR"', ...defaultTheme.fontFamily.sans],
				serif: ['"Noto Serif KR"', ...defaultTheme.fontFamily.serif],
				mono: ['D2Coding', ...defaultTheme.fontFamily.mono]
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('tailwindcss-debug-screens'),
		require('daisyui')
	],
	daisyui: {
		logs: false,
		themes: [
			{
				light: {
					primary: '#2b49ff',
					secondary: '#00b5b4',
					accent: '#ff301c',
					neutral: '#0f1023',
					'base-100': '#fff',
					'base-200': '#f6f7fb',
					'base-300': '#fafbfc',
					info: '#98d7f0',
					success: '#9cdcc5',
					warning: '#e0ca96',
					error: '#f8bbb0'
				}
			},
			{
				dark: {
					primary: '#2b49ff',
					secondary: '#00b5b4',
					accent: '#ff301c',
					neutral: '#4e5168',
					'base-100': '#393b51',
					'base-200': '#2b2d43',
					'base-300': '#0f1023',
					info: '#98d7f0',
					success: '#9cdcc5',
					warning: '#e0ca96',
					error: '#f8bbb0'
				}
			}
		]
	}
};
